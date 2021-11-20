import { TemplateRef } from '@angular/core';
import { PolymorphComponentWrapper } from '../classes/component';
import { PolymorphHandler, PolymorphPrimitive } from './primitive';

export type PolymorphContent<C> =
  | TemplateRef<C>
  | PolymorphComponentWrapper<object, C>
  | PolymorphHandler<C>
  | PolymorphPrimitive;
