import { Injector, Type } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../tokens/tokens';

export class PolymorphComponentWrapper<T extends object, C> {
  constructor(
    readonly component: Type<T>,
    private readonly injector: Injector | null = null
  ) {}

  createInjector(injector: Injector, context: C): Injector {
    return Injector.create({
      parent: this.injector || injector,
      providers: [
        {
          provide: POLYMORPH_CONTEXT,
          useValue: context,
        },
      ],
    });
  }
}
