import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductComponent } from './product.component'
import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
describe("Product component testing:", () => {
  var componentInst: ProductComponent;
  var controllerMock: HttpTestingController;
  var factory: ComponentFixture<ProductComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ declarations: [ProductComponent], imports: [HttpClientTestingModule] }).compileComponents();
  });
  beforeEach(() => {
    factory = TestBed.createComponent(ProductComponent);
    componentInst = factory.componentInstance;
    controllerMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    controllerMock.verify();
  })
  it("Testing component created", () => {
    expect(componentInst).toBeTruthy();
  });
  it("Testing data incoming", () => {
    let productsMock = [{id:1,name:"cagocel",price:230.3}, {id:2,name:"shawerma",price:100.2}]
    componentInst.ngOnInit();
    let req = controllerMock.expectOne("/product");
    expect(req.request.method).toEqual("GET");
    req.flush(productsMock);
    expect(componentInst.products).toEqual(productsMock);
  });
});
