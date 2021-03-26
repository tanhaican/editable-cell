<template>
  <div @click="onFieldClick" class="edit-cell-container edit-cell">
    <el-tooltip
      v-if="!editMode && !showInput"
      :placement="toolTipPlacement"
      :open-delay="toolTipDelay"
      :disabled="!editMode"
      :content="toolTipContent"
    >
      <div :class="{ 'edit-enabled-cell': canEdit }" @keyup.enter="onFieldClick" tabindex="0" class="cell-content">
        <slot name="content"></slot>
      </div>
    </el-tooltip>
    <component
      ref="input"
      :is="editableComponent"
      v-if="editMode || showInput"
      @focus="onFieldClick"
      @keyup.enter.native="onInputExit"
      v-on="listeners"
      v-bind="$attrs"
      v-model="model"
      :placeholder="placeholder"
      class="editable-component"
    >
      <slot name="edit-component-slot"></slot>
    </component>
  </div>
</template>
<script>
export default {
  name: 'EditableCell',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    toolTipContent: {
      type: String,
      default: 'Click to edit'
    },
    toolTipDelay: {
      type: Number,
      default: 500
    },
    toolTipPlacement: {
      type: String,
      default: 'top-start'
    },
    /**
     * 是否显示输入框
     */
    showInput: {
      type: Boolean,
      default: false
    },
    editableComponent: {
      type: String,
      default: 'el-input'
    },
    closeEvent: {
      type: String,
      default: 'blur'
    },
    /**
     * 是否支持编辑（单击切换为输入框模式）
     */
    canEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editMode: false
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    listeners() {
      return {
        [this.closeEvent]: this.onInputExit,
        ...this.$listeners
      };
    }
  },
  methods: {
    onFieldClick() {
      if (this.canEdit) {
        this.editMode = true;
        this.$nextTick(() => {
          const inputRef = this.$refs.input;
          if (inputRef && inputRef.focus && typeof inputRef.focus === "function") {
            inputRef.focus();
          }
        });
      }
    },
    onInputExit() {
      this.editMode = false;
    },
    onInputChange(val) {
      this.$emit('input', val);
    }
  }
};
</script>
<style scoped>
.edit-cell-container .cell-content {
  min-height: 30px;
  padding: 2.5px;
  border: 1px solid transparent;
}

.edit-cell-container .editable-component {
  min-height: 30px;
}

.edit-cell-container .edit-enabled-cell {
  border: 1px dashed #409eff;
}
</style>
