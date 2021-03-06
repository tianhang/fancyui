import GeneratecomponentModule from './generatecomponent'
import GeneratecomponentController from './generatecomponent.controller.js';
import GeneratecomponentComponent from './generatecomponent.component.js';
import GeneratecomponentTemplate from './generatecomponent.html';

describe('Generatecomponent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GeneratecomponentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GeneratecomponentController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GeneratecomponentTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GeneratecomponentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GeneratecomponentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GeneratecomponentController);
      });
  });
});
