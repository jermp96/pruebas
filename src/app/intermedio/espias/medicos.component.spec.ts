
import { EMPTY, from, throwError } from 'rxjs';
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

    it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
        const medico = {id: 1, nombre: 'Juan'};
        spyOn(servicio, 'agregarMedico').and.returnValue(
            from([medico])
        );

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => miError));
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);  
    });

    it('debe de llamaral servidor para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(true); // espía la funcion confirm del objeto window
        const espia = spyOn(servicio, 'borrarMedico')
        .and.returnValue(EMPTY); // no interesa el valor que retorne

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    });

    it('NO debe de llamaral servidor para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(false); // espía la funcion confirm del objeto window
        
        const espia = spyOn(servicio, 'borrarMedico')
        .and.returnValue(EMPTY); // no interesa el valor que retorne

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    });
});
