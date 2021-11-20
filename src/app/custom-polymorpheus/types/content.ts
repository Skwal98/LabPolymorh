import { TemplateRef } from '@angular/core';
import { PolymorphPrimitive } from './primitive';

export type PolymorphContent<C> = TemplateRef<C> | PolymorphPrimitive;
