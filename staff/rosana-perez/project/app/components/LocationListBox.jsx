import { Listbox, ListboxLabel, ListboxOption } from '../components/listbox'
import { useState } from 'react'

function LocationListBox() {
    const [formData, setFormData] = useState({ location: 'A Coruña' });

    const handleChange = (selectedValue) => {
        // Update the state with the new location
        setFormData((prevState) => ({
            ...prevState,
            location: selectedValue,
        }))
    }

    return (

        <Listbox as="div" name="location" defaultValue="A Coruña"
            id="location"
            value={formData.location}
            onChange={handleChange}>
            <ListboxOption value="A Coruña">
                <ListboxLabel>A Coruña</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="A Estrada">
                <ListboxLabel>A Estrada</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Ames">
                <ListboxLabel>Ames</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Betanzos">
                <ListboxLabel>Betanzos</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Boiro">
                <ListboxLabel>Boiro</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Camariñas">
                <ListboxLabel>Camariñas</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Carballo">
                <ListboxLabel>Carballo</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Cee">
                <ListboxLabel>Cee</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Ferrol">
                <ListboxLabel>Ferrol</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Lalín">
                <ListboxLabel>Lalín</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Lugo">
                <ListboxLabel>Lugo</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Meis">
                <ListboxLabel>Meis</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Monforte de Lemos">
                <ListboxLabel>Monforte de Lemos</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Muros">
                <ListboxLabel>Muros</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Neda">
                <ListboxLabel>Neda</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="O Barco de Valdeorras">
                <ListboxLabel>O Barco de Valdeorras</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="O Grove">
                <ListboxLabel>O Grove</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Ourense">
                <ListboxLabel>Ourense</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Padrón">
                <ListboxLabel>Padrón</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Pontecedo">
                <ListboxLabel>Pontecedo</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Pontevedra">
                <ListboxLabel>Pontevedra</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Ribeira">
                <ListboxLabel>Ribeira</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Rianxo">
                <ListboxLabel>Rianxo</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Ribadeo">
                <ListboxLabel>Ribadeo</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Santiago de Compostela">
                <ListboxLabel>Santiago de Compostela</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Sarria">
                <ListboxLabel>Sarria</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Vigo">
                <ListboxLabel>Vigo</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Vilanova de Arousa">
                <ListboxLabel>Vilanova de Arousa</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Viveiro">
                <ListboxLabel>Viveiro</ListboxLabel>
            </ListboxOption>
        </Listbox>
    )
}

export default LocationListBox