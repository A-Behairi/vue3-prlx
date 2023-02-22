import { DirectiveBinding } from 'vue'

declare module 'vue' {
  export interface VNodeDirective {
    'prlx'?: DirectiveBinding
  }
}