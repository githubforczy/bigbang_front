<template>
    <a-modal
      title="文章发布"
      :visible="visible"
      :maskClosable="false"
      @cancel="handleClose"
      destroyOnClose
    >
      <a-form layout="vertical" :form="form">
        <a-form-item>
          <a-input 
            placeholder="填写标题..." 
            v-decorator="['title',{ rules: [{ required: true, message: '标题不能为空!' },{max:20 , message: '标题最多20个字'}] }]" 
          />
        </a-form-item>
        <a-form-item>
          <a-textarea
            placeholder="填写摘要..."
            :auto-size="{ minRows: 2, maxRows: 6 }"
            v-decorator="['description',{ rules: [{ required: true, message: '摘要不能为空!' }, {max:64 , message: '摘要最多64个字'}] }]"
          />
        </a-form-item>
        <a-form-item>
          <a-select
            show-search
            placeholder="选择一个分类"
            option-filter-prop="children"
            style="width: 100%"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            v-decorator="['type',{ rules: [{ required: true, message: '分类不能为空!' }] }]"
          >
            <a-select-option value="1">
              Java
            </a-select-option>
            <a-select-option value="2">
              Spring
            </a-select-option>
            <a-select-option value="3">
              Docker
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
      <template slot="footer">
        <div :style="{ textAlign: 'center' }" class="al-form-footer">
          <a-button type="default" @click="handleClose">取消</a-button>
          <a-button type="primary" @click="publishArticle">确认发布</a-button>
        </div>
      </template>
    </a-modal>
</template>
<script>
export default {
  name: 'article-submit-modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() { 
    return {
    }
  },
  methods: {
    handleClose() {
      this.$emit("hidden", false);
    },
    publishArticle() {
      this.form.validateFields((err, values) => {
        if (err) {
          return;
        }
        this.$emit("publish", values);
      });
    }
  }
 }
</script>

<style scoped>
</style>