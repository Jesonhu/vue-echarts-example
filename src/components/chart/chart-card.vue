<template>
  <a-card class="cart-card"
    :loading="loading"
    :bordered="false"
  >
    <div class="cart-card__head">
      <div class="cart-card__head-avatar" v-if="this.$slots.avatar">
        <slot name="avatar"/>
      </div>
      <div class="cart-card__head-content">
        <div class="cart-card__head-meta head-meta">
          <div class="head-meta__title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div class="head-meta__action" v-if="this.$slots.action">
            <slot name="action"></slot>
          </div>
        </div>
        <div class="cart-card__head-total" v-if="this.$slots.total">
          <slot name="total"></slot>
        </div>
      </div>
    </div>
    <div class="cart-card__content">
      <slot></slot>
    </div>
    <div class="cart-card__footer">
      <slot name="footer"></slot>
    </div>
  </a-card>
</template>



<script>

/**
 * cart-card
 *   &__head
 *     &__head-avatar
 *     &__head-content
 *       &__head-meta
 *       &__head-total
 *   &__content
 *     
 *   &__footer
 *     &__footer-content
 * 
 * 
 * ant.design:
 * cart-card
 *   &__chartTop
 *     &__avatar
 *     &__metaWrap
 *       &__meta
 *         title <span>移动指标</span>
 *         action  
 *       &__total(数字显示)
 *   
 *   &__content
 *   &__footer
 */

export default {
  name: 'cart-card',
  props: {
    title: {
      type: String,
      default: ''
    },
    total: {
      type: [Function, Number, String],
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _total() {
      const total = this.total;
      return typeof total === 'function' ? total() : total;
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-card {
  margin: 16px;
  background-color: #fff;

  &__head,
  &__head-meta,
  &__head-total {
    width: 100%;
    overflow:hidden;
  }

  &__head {
    display: flex;
  }

  &__head-avatar {
    margin-right: 16px;
  }

  &__head-content {
    flex: 1;
  }

  &__head-meta {
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }

  &__head-total {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    color: #000;
    margin-top: 4px;
    margin-bottom: 0;
    font-size: 30px;
    line-height: 38px;
    height: 38px;
    text-align: left;
  }

  &__content {
    margin-bottom: 12px;
    position: relative;
    height: 46px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__footer {
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    text-align: left;
  }
}
</style>

<style lang="scss">
  .head-meta {
    display: flex;
    justify-content: space-between;
  }
</style>