import {React, Component } from "react";
import './CreateItems.css';

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
        console.log(this.state);
        event.preventDefault();
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
                    <div>
                        <label className="mr-1" htmlFor="nameInput">
                            Name 
                        </label>
                        <input className="ml-1 form-control" 
                        type="text" 
                        name="nameInput"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="p-1">
                            <label className="mr-1" htmlFor="raritySelect">
                                Rarity 
                            </label>
                            <select className="ml-1 form-control" 
                            name="raritySelect"
                            onChange={this.handleChange}
                            value={this.state.rarity}>
                                <option value="common">Common</option>
                                <option value="uncommon">Uncommon</option>
                                <option value="rare">Rare</option>
                                <option value="very_rare">Very Rare</option>
                                <option value="legendary">Legendary</option>
                                <option value="artifact">Artifact</option>
                                <option value="unique">Unique</option>
                            </select>
                        </div>
                        <div className="p-1">
                            <label className="mr-1" htmlFor="baseItemTypeSelection">
                                Base Item Type 
                            </label>
                            <select className="ml-1 form-control" 
                            name="baseItemTypeSelection"
                            onChange={this.handleChange}
                            value={this.state.base_item_type}>
                                <option value="item">Item</option>
                                <option value="armor">Armor</option>
                                <option value="weapon">Weapon</option>
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
                                    <option value="wonderous_items">Wonderous Items</option>
                                    <option value="ammunition">Ammunition</option>
                                    <option value="potions">Potions</option>
                                    <option value="rods">Rods</option>
                                    <option value="scrolls">Scrolls</option>
                                    <option value="staffs">Staffs</option>
                                    <option value="wands">Wands</option>
                                    <option value="rings">Rings</option>
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
                                        <option value="any">Any</option>
                                        <option value="light">Light</option>
                                        <option value="medium">Medium</option>
                                        <option value="heavy">Heavy</option>
                                        <option value="light_medium">Light or Medium</option>
                                        <option value="medium_heavy">Medium or Heavy</option>
                                        <option value="padded">Padded</option>
                                        <option value="leather">Leather</option>
                                        <option value="studded_leather">Studded Leather</option>
                                        <option value="hide">Hide</option>
                                        <option value="chain_shirt">Chain shirt</option>
                                        <option value="scale_mail">Scale mail</option>
                                        <option value="breastplate">Breastplate</option>
                                        <option value="half_plate">Half Plate</option>
                                        <option value="ring_mail">Ring Mail</option>
                                        <option value="chain_mail">Chain Mail</option>
                                        <option value="splint">Splint</option>
                                        <option value="plate">Plate</option>
                                        <option value="shield">Shield</option>
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
                                        <option value="simple_melee">Simple Melee</option>
                                        <option value="simple_ranged">Simple Ranged</option>
                                        <option value="martial_melee">Martial Melee</option>
                                        <option value="martial_ranged">Martial Ranged</option>
                                        <option value="advanced_melee">Advanced Melee</option>
                                        <option value="advanced_ranged">Advanced Ranged</option>
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
                                            <option value="any">Any</option>
                                            <option value="club">Club</option>
                                            <option value="dagger">Dagger</option>
                                            <option value="greatclub">Greatclub</option>
                                            <option value="handaxe">Handaxe</option>
                                            <option value="javelin">Javelin</option>
                                            <option value="light_hammer">Light Hammer</option>
                                            <option value="mace">Mace</option>
                                            <option value="quaterstaff">Quarterstaff</option>
                                            <option value="sickle">Sickle</option>
                                            <option value="spear">Spear</option>
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
                                            <option value="any">Any</option>
                                            <option value="light_crossbow">Crossbow, light</option>
                                            <option value="dart">Dart</option>
                                            <option value="shrotbow">Shortbow</option>
                                            <option value="sling">Sling</option>
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
                                            <option value="any">Any</option>
                                            <option value="battleaxe">Battleaxe</option>
                                            <option value="flail">Flail</option>
                                            <option value="glaive">Glaive</option>
                                            <option value="greataxe">Greataxe</option>
                                            <option value="greatsword">Greatsword</option>
                                            <option value="haleberd">Haleberd</option>
                                            <option value="lance">Lance</option>
                                            <option value="longsword">Longsword</option>
                                            <option value="maul">Maul</option>
                                            <option value="morningstar">Morningstar</option>
                                            <option value="pike">Pike</option>
                                            <option value="rapier">Rapier</option>
                                            <option value="scimitar">Scimitar</option>
                                            <option value="shortsword">Shortsword</option>
                                            <option value="trident">Trident</option>
                                            <option value="war_pick">War Pick</option>
                                            <option value="warhammer">Warhammer</option>
                                            <option value="whip">Whip</option>
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
                                            <option value="any">Any</option>
                                            <option value="hand_crossbow">Crossbow, hand</option>
                                            <option value="heavy_crossbow">Crossbow, heavy</option>
                                            <option value="longbow">Longbow</option>
                                            <option value="net">Net</option>
                                        </select>
                                    </div> :
                                    <div className="d-flex flex-column justify-content-center">
                                        <label htmlFor="baseWeaponSelector" className="m-1">
                                            Other Weapon
                                        </label>
                                        <select className="m-1 form-control"
                                        name="baseWeaponSelector"
                                        onChange={this.handleChange}
                                        value={this.state.base_weapon}>
                                            <option value="any">Any</option>
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
                                        value={this.state.base_weapon}>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                            <option value="any">Any</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <input className=""
                        type="checkbox" 
                        name="attunementRequirementCheckBox"
                        onChange={this.handleChange}
                        value={this.state.attunement}/>
                        <label className="ml-1" htmlFor="attunementRequirementCheckBox">
                            Attunement Required
                        </label>
                        {
                            this.state.attunement ?
                            <div>
                                <input className=" form-control"
                                type='text' 
                                name="attunementDescriptionInput"
                                onChange={this.handleChange}
                                value={this.state.attunement_description}/>
                            </div> : 
                            <></>
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