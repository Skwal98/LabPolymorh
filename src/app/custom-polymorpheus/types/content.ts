import { TemplateRef } from '@angular/core';
import { PolymorphComponentWrapper } from '../classes/component';
import { PolymorphPrimitive } from './primitive';

export type PolymorphContent<C> =
  | TemplateRef<C>
  | PolymorphComponentWrapper<object, C>
  | PolymorphPrimitive;
