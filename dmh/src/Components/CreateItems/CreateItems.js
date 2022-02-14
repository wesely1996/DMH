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
            description: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.name){
            case "baseItemTypeSelection":
                this.setState({base_item_type: event.target.value});
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
            default:
                break;
        }
    }
    
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    
    render(){
        return(
            <div className='py-3 px-3 text-center d-flex justify-content-center'>
                <form className="d-flex flex-column w-75"
                onSubmit={this.handleSubmit}>
                    <h2 className='text-white mb-4 mt-4 font-weight-bold'
                    id='forgeName'>
                        <strong>FORGE</strong>
                    </h2>
                    <div>
                        <label className="mr-1" htmlFor="nameInput">
                            Name 
                        </label>
                        <input className="ml-1" type="text" name="nameInput"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="p-1">
                            <label className="mr-1" htmlFor="raritySelect">
                                Rarity 
                            </label>
                            <select className="ml-1" name="raritySelect"
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
                            <select className="ml-1" 
                            name="baseItemTypeSelection"
                            onChange={this.handleChange}
                            value={this.state.base_item_type}>
                                <option value="item">Item</option>
                                <option value="armor">Armor</option>
                                <option value="weapon">Weapon</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        {this.state.base_item_type === "item" ?
                            <div>
                                <label className="mr-1" htmlFor="itemTypeSelection">
                                    Item type
                                </label>
                                <select className="ml-1" 
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
                            <div>Armor</div> :
                            <div>Weapon</div>
                        }
                    </div>
                    <div>
                        <input type="checkbox" name="attunementRequirementCheckBox"
                        onChange={this.handleChange}
                        value={this.state.attunement}/>
                        <label className="ml-1" htmlFor="attunementRequirementCheckBox">
                            Attunement Required
                        </label>
                        {
                            this.state.attunement ?
                            <div>
                                <input type='text' name="attunementDescriptionInput"
                                onChange={this.handleChange}
                                value={this.state.attunement_description}/>
                            </div> : 
                            <></>
                        }
                    </div>
                    <div>
                        <textarea name="itemDescriptionInput"
                        onChange={this.handleChange}
                        value={this.state.description}/>
                    </div>
                    <div>
                        <button type="submit">
                            Craft Item
                        </button>
                        <button type="reset">
                            Scrap Item
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateItems;