import {Booter} from '@loopback/boot';
import {
  Application,
  Binding,
  Component,
  ControllerClass,
  CoreBindings,
  inject,
  ProviderMap,
  ServiceOrProviderClass,
} from '@loopback/core';
import {Class, Model, Repository} from '@loopback/repository';
import {TodoController} from './controllers';
import {Todo} from './models';
import {TodoRepository} from './repositories';
import {GeocoderProvider} from './services';

export class DummyComponent implements Component {
  providers?: ProviderMap = {};

  bindings: Binding[] = [];

  services?: ServiceOrProviderClass[];
  booters?: Class<Booter>[];

  /**
   * An optional list of Repository classes to bind for dependency injection
   * via `app.repository()` API.
   */
  repositories?: Class<Repository<Model>>[];

  /**
   * An optional list of Model classes to bind for dependency injection
   * via `app.model()` API.
   */
  models?: Class<Model>[];

  /**
   * An array of controller classes
   */
  controllers?: ControllerClass[];
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
  ) {
    this.repositories = [TodoRepository];
    this.models = [Todo];
    this.controllers = [TodoController];
    this.services = [GeocoderProvider];
  }
}
