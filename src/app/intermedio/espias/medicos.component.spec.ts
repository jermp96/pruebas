
import { EMPTY, from } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los medicos', () => {
        const medicos = ['medico 1', 'medico 2', 'medico 3'];
        
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from(medicos);
        })
        
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });


    it('debe de llamar al servicio para agregar un médico', () => {
        
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return EMPTY;
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

});
