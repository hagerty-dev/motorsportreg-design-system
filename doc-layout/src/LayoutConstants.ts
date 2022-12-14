import { InjectionKey, Ref } from 'vue';

export const ColorThemeKey: InjectionKey<Ref<'dark' | 'light'>> = Symbol();
