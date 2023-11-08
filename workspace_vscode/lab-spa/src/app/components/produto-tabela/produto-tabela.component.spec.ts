import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoTabelaComponent } from './produto-tabela.component';

describe('ProdutoTabelaComponent', () => {
  let component: ProdutoTabelaComponent;
  let fixture: ComponentFixture<ProdutoTabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoTabelaComponent]
    });
    fixture = TestBed.createComponent(ProdutoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
