import {React, Component } from "react";
import './CreateItems.css';
import rarityOptions from '../../database/rarity.json';
import itemTypes from '../../database/itemTypes.json';
import weaponProperties from '../../database/weaponProperties.json';

class CreateItems extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            rarity : "common",
            base_item_type: "item",
            item_type: "wonderous_items",
            attunement: false,
            attunement_description: "",
            description: "",
            base_armor : "any",
            dex_bonus : "none",
            str_requirement: 0,
            stealth_check: "none",
            base_weapon_type: "simple_melee",
            base_weapon: "any",
            weapon_properties: [],
            weapon_damage: [1, 4],
            weapon_range: 5,
            has_charges: false,
            number_of_charges: 0,
            charges_reset_condition: "none",
            charges_reset_description: "",
            weight : 0,
            price: [0, 0, 0],
            item_tags: [],
            modifiers: [],
            conditions: [],
            spells: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.name){
            case "baseItemTypeSelection":
                if(event.target.value === "item"){
                    this.setState({
                        base_item_type: event.target.value,
                        item_type: 'wonderous_items',
                        base_armor: "any"
                    });
                }else if(event.target.value === "armor"){
                    this.setState({
                        base_item_type: event.target.value,
                        item_type: this.state.base_item_type
                    });
                }else{
                    this.setState({
                        base_item_type: event.target.value,
                        item_type: this.state.base_item_type,
                        base_armor: "any"
                    });
                }
                break;
            case "raritySelect":
                this.setState({rarity: event.target.value});
                break;
            case "nameInput":
                this.setState({name: event.target.value});
                break;
            case "itemTypeSelection":
                this.setState({item_type: event.target.value});
                break;
            case "attunementRequirementCheckBox":
                this.setState({attunement: event.target.checked});
                break;
            case "attunementDescriptionInput":
                this.setState({attunement_description: event.target.value});
                break;
            case "itemDescriptionInput":
                this.setState({description: event.target.value});
                break;
            case "baseArmorSelection":
                this.setState({base_armor: event.target.value});
                break;
            case "dexBonusSelector":
                this.setState({dex_bonus: event.target.value});
                break;
            case "strRequirementInput":
                this.setState({str_requirement: event.target.value});
                break;
            case "stealthCheckSelector":
                this.setState({stealth_check: event.target.value});
                break;
            case "baseWeaponTypeSelector":
                this.setState({base_weapon_type: event.target.value});
                break;
            case "baseWeaponSelector":
                this.setState({base_weapon: event.target.value});
                break;
            case "weaponPropertiesSelector":
                const index = this.state.weapon_properties.indexOf(event.target.value);
                if(index > -1)
                    this.state.weapon_properties.splice(index, 1);
                else
                    this.state.weapon_properties.push(event.target.value);
                break;
            case "diceNumberInput":
                this.setState({weapon_damage : [event.target.value, this.state.weapon_damage[1]]});
                break;
            case "weaponDiceSelector":
                this.setState({weapon_damage : [this.state.weapon_damage[0], event.target.value]});
                break;
            case "weaponRangeInput":
                this.setState({weapon_range: event.target.value});
                break;
            case "weightInput":
                this.setState({weight: event.target.value});
                break;
            case "goldInput":
                let new_gold_price = this.state.price;
                new_gold_price[0] = event.target.value;
                this.setState({price : new_gold_price});
                break;
            case "silverInput":
                let new_silver_price = this.state.price;
                new_silver_price[1] = event.target.value;
                this.setState({price : new_silver_price});
                break;
            case "copperInput":
                let new_copper_price = this.state.price;
                new_copper_price[2] = event.target.value;
                this.setState({price : new_copper_price});
                break;
            case "hasChargesCheckBox":
                this.setState({has_charges: event.target.checked});
                break;
            case "chargesResetConditionSelect":
                this.setState({charges_reset_condition: event.target.value});
                break;
            case "numberOfChargesInput":
                this.setState({number_of_charges: event.target.value});
                break;
            case "addModifierButton":
                this.addModifier();
                break;
            case "addConditionButton":
                this.addCondition();
                break;
            case "addSpellsButton":
                this.addSpell();
                break;
            default:
                break;
        }
    }

    resetItem = () =>{
        this.setState({
            name : "",
            rarity : "common",
            base_item_type: "item",
            item_type: "wonderous_items",
            attunement: false,
            attunement_description: "",
            description: "",
            base_armor : "any",
            dex_bonus : "none",
            str_requirement: 0,
            stealth_check: "none",
            base_weapon_type: "simple_melee",
            base_weapon: "any",
            weapon_properties: [],
            weapon_damage: [1, 4],
            weapon_range: 5,
            has_charges: false,
            number_of_charges: 0,
            charges_reset_condition: "none",
            charges_reset_description: "",
            weight : 0,
            price: [0, 0, 0],
            item_tags: [],
            modifiers: [],
            conditions: [],
            spells: []
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    addModifier(){
        const mod = {
            type : "",
            subtype : "",
            ability_score : "",
            dice_count : 0,
            dice_type : 1,
            additional_bonus_type : "",
            details : "",
            duration : 0,
            duration_interval : "seconds"
        }
        let new_modifiers = this.state.modifiers;
        new_modifiers.push(mod);
        this.setState({modifiers : new_modifiers});
    }

    addCondition(){
        const condition = {
            type : "",
            details : "",
            duration : 0,
            duration_interval : "seconds"
        }
        let new_conditions = this.state.conditions;
        new_conditions.push(condition);
        this.setState({conditions : new_conditions});
    }

    addSpell(){
        const spell = {
            spell_name : "",
            details : "",
            min_charges : 1,
            max_charges : 1,
            save_dc: 8,
            spell_cast_level: 1
        }
        let new_spells = this.state.spells;
        new_spells.push(new_spells);
        this.setState({spells : new_spells});
    }
    
    render(){
        return(
            <div className='py-3 px-3 text-center d-flex justify-content-center w-100'>
                <form  id="forge" className="d-flex flex-column w-75"
                onSubmit={this.handleSubmit}>
                    <h2 className='text-white mb-4 mt-4 font-weight-bold'
                    id='forgeName'>
                        <strong>FORGE</strong>
                    </h2>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex flex-column w-50">
                            <label className="" htmlFor="nameInput">
                                Name 
                            </label>
                            <input className="form-control" 
                            type="text" 
                            name="nameInput"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="d-flex flex-row w-50">
                            <div className="d-flex flex-column w-50">
                                <label className="" htmlFor="weightInput">
                                    Weight 
                                </label>
                                <input className="form-control" 
                                type="text" 
                                name="weightInput"
                                value={this.state.weight}
                                onChange={this.handleChange}/>
                            </div>
                            <div className="d-flex flex-column w-50">
                                <label className="" htmlFor="priceInput">
                                    Price 
                                </label>
                                <div name="priceInput" 
                                className="d-flex flex-row">
                                    <input className="form-control" 
                                    type="text" 
                                    name="goldInput"
                                    value={this.state.price[0]}
                                    onChange={this.handleChange}/>
                                    <input className="form-control" 
                                    type="text" 
                                    name="silverInput"
                                    value={this.state.price[1]}
                                    onChange={this.handleChange}/>
                                    <input className="form-control" 
                                    type="text" 
                                    name="copperInput"
                                    value={this.state.price[2]}
                                    onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex flex-column">
                            <label className="mr-1" htmlFor="raritySelect">
                                Rarity 
                            </label>
                            <select className="ml-1 form-control" 
                            name="raritySelect"
                            onChange={this.handleChange}
                            value={this.state.rarity}>
                                {
                                    rarityOptions.map((option, index) =>{
                                        return(
                                            <option value={option.value} key={index}>
                                                {option.name}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="d-flex flex-column">
                            <label className="mr-1" htmlFor="baseItemTypeSelection">
                                Base Item Type 
                            </label>
                            <select className="ml-1 form-control" 
                            name="baseItemTypeSelection"
                            onChange={this.handleChange}
                            value={this.state.base_item_type}>
                                {
                                    itemTypes.map((option, index) =>{
                                        return(
                                            <option value={option.type_tag} key={index}>
                                                {option.type_name}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        {this.state.base_item_type === "item" ?
                            <div className="d-flex flex-row justify-content-center">
                                <label className="mr-1" htmlFor="itemTypeSelection">
                                    Item type
                                </label>
                                <select className="ml-1 form-control" 
                                name="itemTypeSelection"
                                onChange={this.handleChange}
                                value={this.state.item_type}>
                                    {
                                        itemTypes[0].sub_type.map((option, index) =>{
                                            return(
                                                <option value={option.subtype_tag} key={index}>
                                                    {option.subtype_name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div> : 
                        this.state.base_item_type === "armor" ?
                            <div className="d-flex flex-row justify-content-center">
                                <div className="d-flex flex-column">
                                    <label htmlFor="baseArmorSelection">
                                        Base Armor
                                    </label>
                                    <select className=" form-control"
                                    name="baseArmorSelection"
                                    onChange={this.handleChange}
                                    value={this.state.base_armor}>
                                        {
                                            itemTypes[1].sub_type.map((option, index) =>{
                                                return(
                                                    <option value={option.subtype_tag} key={index}>
                                                        {option.subtype_name}
                                                    </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="dexBonusSelector">
                                        Dex Bonus
                                    </label>
                                    <select className=" form-control"
                                    name="dexBonusSelector"
                                    onChange={this.handleChange}
                                    value={this.state.dex_bonus}>
                                        <option value="none">None</option>
                                        <option value="full">Full Moddifier</option>
                                        <option value="max2">Max 2</option>
                                    </select>
                                </div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="strRequirementInput">
                                        Str Requirement
                                    </label>
                                    <input className=" form-control"
                                    name="strRequirementInput"
                                    value={this.state.str_requirement}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="stealthCheckSelector">
                                        Stealth Check
                                    </label>
                                    <select className=" form-control"
                                    name="stealthCheckSelector"
                                    onChange={this.handleChange}
                                    value={this.state.stealth_check}>
                                        <option value="none">None</option>
                                        <option value="disadvantage">Disadvantage</option>
                                        <option value="advantage">Advantage</option>
                                    </select>
                                </div>
                            </div> :
                            <div className="d-flex flex-column justify-content-center">
                                <div className="d-flex flex-row justify-content-center">
                                    <label htmlFor="baseWeaponTypeSelector" className="m-1">
                                        Base Weapon Type
                                    </label>
                                    <select className="m-1  form-control"
                                    name="baseWeaponTypeSelector"
                                    onChange={this.handleChange}
                                    value={this.state.base_weapon_type}>
                                        {
                                            itemTypes[2].sub_type.map((option, index) =>{
                                                return(
                                                    <option value={option.subtype_tag} key={index}>
                                                        {option.subtype_name}
                                                    </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="d-flex flex-row justify-content-center">
                                {
                                    this.state.base_weapon_type === "simple_melee" ?
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Simple Melee Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                        {
                                            itemTypes[2].sub_type[0].base_weapons.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div> :
                                    this.state.base_weapon_type === "simple_ranged" ?
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Simple Ranged Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                        {
                                            itemTypes[2].sub_type[1].base_weapons.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div> : 
                                    this.state.base_weapon_type === "martial_melee" ?
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Martial Melee Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                        {
                                            itemTypes[2].sub_type[2].base_weapons.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div> :
                                    this.state.base_weapon_type === "martial_ranged" ?
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Martial Ranged Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                        {
                                            itemTypes[2].sub_type[3].base_weapons.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div> : 
                                    this.state.base_weapon_type === "martial_ranged" ?
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Advanced Melee Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                        {
                                            itemTypes[2].sub_type[4].base_weapons.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div> :
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Advanced Ranged Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                        {
                                            itemTypes[2].sub_type[5].base_weapons.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div>
                                }
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="weaponPropertiesSelector" className="m-1">
                                            Weapon Properties
                                        </label>
                                        <select className="m-1 form-control"
                                        name="weaponPropertiesSelector"
                                        onChange={this.handleChange}
                                        value={this.state.weapon_properties}
                                        multiple={true}>
                                        {
                                            weaponProperties.map((option, index) =>{
                                                return(
                                                    <option value={option.tag} key={index}>
                                                        {option.name}
                                                    </option>
                                                );
                                            })
                                        }
                                        </select>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="weaponDamageSelector" className="m-1">
                                            Damage
                                        </label>
                                        <div name="weaponDamageSelector" 
                                        className="d-flex flex-row justify-content-center">
                                            <input className="m-1 form-control"
                                            name="diceNumberInput"
                                            onChange={this.handleChange}
                                            value={this.state.weapon_damage[0]}/>
                                            <select className="m-1 form-control"
                                            name="weaponDiceSelector"
                                            onChange={this.handleChange}
                                            value={this.state.weapon_damage[1]}>
                                                <option value={4}>4</option>
                                                <option value={6}>6</option>
                                                <option value={8}>8</option>
                                                <option value={10}>10</option>
                                                <option value={12}>12</option>
                                                <option value={20}>20</option>
                                                <option value={100}>100</option>
                                                <option value={1}>Fixed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="weaponRangeInput" className="m-1">
                                            Range
                                        </label>
                                        <input className="m-1 form-control"
                                        name="weaponRangeInput"
                                        onChange={this.handleChange}
                                        value={this.state.weapon_range}/>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex flex-row">
                            <input className=""
                            type="checkbox" 
                            name="attunementRequirementCheckBox"
                            onChange={this.handleChange}
                            value={this.state.attunement}/>
                            <label className="ml-1" htmlFor="attunementRequirementCheckBox">
                                Attunement Required
                            </label>
                        </div>
                        {
                            this.state.attunement ?
                            <div className="d-flex flex-row ml-1">
                                <input className="form-control"
                                type='text' 
                                name="attunementDescriptionInput"
                                onChange={this.handleChange}
                                value={this.state.attunement_description}/>
                                <label className="ml-1" htmlFor="attunementDescriptionInput">
                                    Attunement Description
                                </label>
                            </div> : 
                            <></>
                        }
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-center">
                            <input className=""
                            type="checkbox" 
                            name="hasChargesCheckBox"
                            onChange={this.handleChange}
                            value={this.state.has_charges}/>
                            <label className="ml-1" htmlFor="hasChargesCheckBox">
                                Has Charges
                            </label>
                        </div>
                        {
                            this.state.has_charges ?
                            <div className="d-flex flex-row ml-1 justify-content-center">
                                <div className="d-flex flex-column justify-content-center">
                                    <label className="ml-1" htmlFor="numberOfChargesInput">
                                        Number Of Charges
                                    </label>
                                    <input className="form-control"
                                    type="text" 
                                    name="numberOfChargesInput"
                                    onChange={this.handleChange}
                                    value={this.state.number_of_charges}/>
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <label className="" htmlFor="chargesResetConditionSelect">
                                        Reset Condition
                                    </label>
                                    <select className="form-control"
                                    type="text" 
                                    name="chargesResetConditionSelect"
                                    onChange={this.handleChange}
                                    value={this.state.charges_reset_condition}>
                                        <option value="none">None, Consumable</option>
                                        <option value="dawn">Dawn</option>
                                        <option value="short_rest">Short Rest</option>
                                        <option value="long_rest">Long Rest</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {
                                    this.state.charges_reset_condition === "other" ?
                                    <div className="d-flex flex-column justify-content-center w-50">
                                        <label className="" htmlFor="ChargesResetDescriptionInput">
                                            Reset Description
                                        </label>
                                        <input className="form-control"
                                        type="text" 
                                        name="ChargesResetDescriptionInput"
                                        onChange={this.handleChange}
                                        value={this.state.charges_reset_description}/>
                                    </div> :
                                    <></>
                                }
                            </div> : 
                            <></>
                        }
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-center">
                            <label className="mr-2" htmlFor="addModifierButton">
                                Modifier Count: {this.state.modifiers.length}
                            </label>
                            <button className="btn btn-dark"
                            name="addModifierButton"
                            type="button"
                            onClick={this.handleChange}>
                                +
                            </button>
                        </div>
                        {
                        this.state.modifiers.map((element, index) => {
                            return <div className="d-flex flex-row justify-content-center" key={index}>
                                {/* type : "",
                                subtype : "",
                                ability_score : "",
                                dice_count : 0,
                                dice_type : 1,
                                additional_bonus_type : "",
                                details : "",
                                duration : 0,
                                duration_interval : "seconds" */}
                                MOD {index}
                            </div>;
                        })
                        }
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-center">
                            <label className="mr-2" htmlFor="addConditionButton">
                                Condition Count: {this.state.conditions.length}
                            </label>
                            <button className="btn btn-dark"
                            name="addConditionButton"
                            type="button"
                            onClick={this.handleChange}>
                                +
                            </button>
                        </div>
                        {
                        this.state.conditions.map((element, index) => {
                            return <div className="d-flex flex-row justify-content-center" key={index}>
                                {/* type : "",
                                details : "",
                                duration : 0,
                                duration_interval : "seconds" */}
                                Condition {index}
                            </div>;
                        })
                        }
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-center">
                            <label className="mr-2" htmlFor="addSpellsButton">
                                Spell Count: {this.state.spells.length}
                            </label>
                            <button className="btn btn-dark"
                            name="addSpellsButton"
                            type="button"
                            onClick={this.handleChange}>
                                +
                            </button>
                        </div>
                        {
                        this.state.spells.map((element, index) => {
                            return <div className="d-flex flex-row justify-content-center" key={index}>
                                {/*  */}
                                Spell {index}
                            </div>;
                        })
                        }
                    </div>
                    <div>
                        <textarea className=" form-control"
                        name="itemDescriptionInput"
                        onChange={this.handleChange}
                        value={this.state.description}/>
                    </div>
                    <div>
                        <button className="btn btn-dark"
                        type="submit"
                        onClick={this.handleSubmit}>
                            Craft Item
                        </button>
                        <button className="btn btn-dark"
                        type="reset"
                        onClick={this.resetItem}>
                            Scrap Item
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateItems;