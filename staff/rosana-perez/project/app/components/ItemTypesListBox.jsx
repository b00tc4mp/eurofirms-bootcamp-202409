import { Listbox, ListboxLabel, ListboxOption } from '../components/listbox'
import { useState } from 'react'

function ItemTypesListBox() {
    const [formData, setFormData] = useState({ type: 'Clothing' })

    const handleChange = (selectedValue) => {
        // Update the state with the new location
        setFormData((prevState) => ({
            ...prevState,
            type: selectedValue,
        }))
    }

    return (

        <Listbox as="div" name="type" defaultValue="Clothing"
            id="type"
            value={formData.type}
            onChange={handleChange}>
            <ListboxOption value="FashionAcc">
                <ListboxLabel>Fashion Accesories</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Toys">
                <ListboxLabel>Toys</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Art">
                <ListboxLabel>Art</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Books">
                <ListboxLabel>Books</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="GamingAndEntertainment">
                <ListboxLabel>Gaming & Entertainment</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="ElectronicDevices">
                <ListboxLabel>Electronic Devices</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Collecting">
                <ListboxLabel>Collecting</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="SportsAndLeisure">
                <ListboxLabel>Sports & Leisure</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="SocialAndCompanionship">
                <ListboxLabel>Social & Companionship</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Home Furniture">
                <ListboxLabel>Home Furniture</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="HomeAppliances">
                <ListboxLabel>Home Appliances</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Gardening">
                <ListboxLabel>Gardening</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="FarmingAndHorticulture">
                <ListboxLabel>Farming & Horticulture</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="HomeAssistance">
                <ListboxLabel>Home Assistance</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Education">
                <ListboxLabel>Education</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="FreeHomeSupport">
                <ListboxLabel>Free Home Support</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="FreeFinanceSupport">
                <ListboxLabel>Free Finance Support</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Business">
                <ListboxLabel>Business Equipment & Furniture</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="Construction">
                <ListboxLabel>Construction Materials & Tools</ListboxLabel>
            </ListboxOption>
        </Listbox>
    )
}

export default ItemTypesListBox