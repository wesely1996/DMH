import { shallow, mount } from 'enzyme';
import CreateItems from './CreateItems';

describe('CreateItems', ()=>{
    let ciWrapper;
    let ciState;
    const base_num_inputs = 7;
    const base_num_select = 3;
    beforeAll(() => {
        ciWrapper = shallow(<CreateItems/>);
        ciState = ciWrapper.state();
    });

    it('renders header component', ()=>{
        const header = ciWrapper.find('h2');

        expect(header).toHaveLength(1);
        expect(header.text()).toContain("FORGE");
    });

    it('has state', ()=>{
        expect(ciState).not.toBeNull();
    });

    it('has name property defined', ()=>{
        expect(ciState.name).toBeDefined();
    });

    it('has rarity property defined', ()=>{
        expect(ciState.rarity).toBeDefined();
    });

    it('has item_type property defined', ()=>{
        expect(ciState.item_type).toBeDefined();
    });

    it('has base_item_type property defined', ()=>{
        expect(ciState.base_item_type).toBeDefined();
    });

    it('has attunement property defined', ()=>{
        expect(ciState.attunement).toBeDefined();
    });

    it('has attunement_description property defined', ()=>{
        expect(ciState.attunement_description).toBeDefined();
    });

    it('has description property defined', ()=>{
        expect(ciState.description).toBeDefined();
    });

    it('has base_armor property defined', ()=>{
        expect(ciState.base_armor).toBeDefined();
    });

    it('has dex_bonus property defined', ()=>{
        expect(ciState.dex_bonus).toBeDefined();
    });

    it('has str_requirement property defined', ()=>{
        expect(ciState.str_requirement).toBeDefined();
    });

    it('has stealth_check property defined', ()=>{
        expect(ciState.stealth_check).toBeDefined();
    });

    it('has base_weapon_type property defined', ()=>{
        expect(ciState.base_weapon_type).toBeDefined();
    });

    it('has base_weapon property defined', ()=>{
        expect(ciState.base_weapon).toBeDefined();
    });

    it('has weapon_properties property defined', ()=>{
        expect(ciState.weapon_properties).toBeDefined();
    });

    it('has weapon_damage property defined', ()=>{
        expect(ciState.weapon_damage).toBeDefined();
    });

    it('has weapon_range property defined', ()=>{
        expect(ciState.weapon_range).toBeDefined();
    });

    it('has has_charges property defined', ()=>{
        expect(ciState.has_charges).toBeDefined();
    });

    it('has number_of_charges property defined', ()=>{
        expect(ciState.number_of_charges).toBeDefined();
    });

    it('has charges_reset_condition property defined', ()=>{
        expect(ciState.charges_reset_condition).toBeDefined();
    });

    it('has charges_reset_description property defined', ()=>{
        expect(ciState.charges_reset_description).toBeDefined();
    });

    it('has weight property defined', ()=>{
        expect(ciState.weight).toBeDefined();
    });

    it('has price property defined', ()=>{
        expect(ciState.price).toBeDefined();
    });

    it('has item_tags property defined', ()=>{
        expect(ciState.item_tags).toBeDefined();
    });

    it('has modifiers property defined', ()=>{
        expect(ciState.modifiers).toBeDefined();
    });

    it('has conditions property defined', ()=>{
        expect(ciState.conditions).toBeDefined();
    });

    it('has spells property defined', ()=>{
        expect(ciState.spells).toBeDefined();
    });

    it('has 2 input elements renedered', ()=>{
        const selectElement = ciWrapper.find('input');
        expect(selectElement).toHaveLength(base_num_inputs);
    });

    it('has 2 button elements renedered', ()=>{
        const selectElement = ciWrapper.find('button');
        expect(selectElement).toHaveLength(2);
    });

    it('has 1 textarea element renedered', ()=>{
        const selectElement = ciWrapper.find('textarea');
        expect(selectElement).toHaveLength(1);
    });

    it('has 3 select elements renedered', ()=>{
        const selectElement = ciWrapper.find('select');
        
        expect(selectElement).toHaveLength(base_num_select);
    });

    it('has 3 input elements renedered when attunement is true', ()=>{
        ciWrapper.setState({attunement: true});
        
        const selectElement = ciWrapper.find('input');
        expect(selectElement).toHaveLength(base_num_inputs+1);
    });

    it('has 5 select and 4 input elements renedered when base_item_type is armor', ()=>{
        ciWrapper.setState({base_item_type: 'armor'});
        
        const selectElement = ciWrapper.find('select');
        expect(selectElement).toHaveLength(base_num_select+2);
        
        const inputElement = ciWrapper.find('input');
        expect(inputElement).toHaveLength(base_num_inputs+2);
    });

    it('has 6 select and 9 input elements renedered when base_item_type is armor', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon',
            attunement: false
        });
        
        const selectElement = ciWrapper.find('select');
        expect(selectElement).toHaveLength(base_num_select+3);

        const inputElement = ciWrapper.find('input');
        expect(inputElement).toHaveLength(base_num_inputs+2);
    });

    it('has 7 input and 4 select elements renedered when it has charges', ()=>{
        ciWrapper.setState({
            base_item_type: 'item',
            has_charges: true
        });
        
        const inputElement = ciWrapper.find('input');
        expect(inputElement).toHaveLength(base_num_inputs+1);
        const selectElement = ciWrapper.find('select');
        expect(selectElement).toHaveLength(base_num_select+1);
    });

    it('has 8 input elements renedered when it has charges', ()=>{
        ciWrapper.setState({
            base_item_type: 'item',
            has_charges: true,
            charges_reset_condition: 'other'
        });
        
        const inputElement = ciWrapper.find('input');
        expect(inputElement).toHaveLength(base_num_inputs+2);
    });

});

describe('ChangeFormLayout',()=>{
    let ciWrapper;
    beforeAll(()=>{
        ciWrapper = mount(<CreateItems/>);
    });

    it('changes base_item_type to item by default', ()=>{
        expect(ciWrapper.state().base_item_type).toEqual('item');
    });

    it('changes base_item_type to armor when select changes', ()=>{
        ciWrapper.find('select').at(1).simulate('change',{
            target: {value: 'armor', name: 'baseItemTypeSelection'}
        });
        expect(ciWrapper.state().base_item_type).toEqual('armor');
    });

    it('changes base_item_type to weapon when select changes', ()=>{
        ciWrapper.find('select').at(1).simulate('change',{
            target: {value: 'weapon', name: 'baseItemTypeSelection'}
        });
        expect(ciWrapper.state().base_item_type).toEqual('weapon');
    });

    it('changes rarity to common by default', ()=>{
        expect(ciWrapper.state().rarity).toEqual('common');
    });

    it('changes rarity to uncommon when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'uncommon', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toEqual('uncommon');
    });

    it('changes rarity to rare when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'rare', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toEqual('rare');
    });

    it('changes rarity to very_rare when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'very_rare', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toEqual('very_rare');
    });

    it('changes rarity to legendary when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'legendary', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toEqual('legendary');
    });

    it('changes rarity to artifact when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'artifact', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toEqual('artifact');
    });

    it('changes rarity to unique when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'unique', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toEqual('unique');
    });

    it('changes name when nameInput changes', ()=>{
        ciWrapper.find('input').at(0).simulate('change', {
            target: {value: 'Item Name', name: "nameInput"}
        });
        expect(ciWrapper.state().name).toEqual('Item Name');
    });

    it('changes weight', ()=>{
        ciWrapper.find('input').at(1).simulate('change', {
            target: {value: 130, name: "weightInput"}
        });
        expect(ciWrapper.state().weight).toEqual(130);
    });

    it('changes price', ()=>{
        ciWrapper.find('input').at(2).simulate('change', {
            target: {value: 5, name: "goldInput"}
        });
        ciWrapper.find('input').at(3).simulate('change', {
            target: {value: 7, name: "silverInput"}
        });
        ciWrapper.find('input').at(4).simulate('change', {
            target: {value: 3, name: "copperInput"}
        });
        expect(ciWrapper.state().price).toEqual([5,7,3]);
    });

    it('changes item_type to ammunition when select changes', ()=>{
        ciWrapper.setState({base_item_type: 'item'});
        ciWrapper.find('select').at(2).simulate('change',{
            target: {value: 'ammunition', name: "itemTypeSelection"}
        });
        expect(ciWrapper.state().item_type).toEqual('ammunition');
    });

    it('change attunement when attunementRequirementCheckBox is checked',()=>{
        ciWrapper.find('input').at(5).simulate('change', {
            target: {checked: true, name: "attunementRequirementCheckBox"}
        });
        expect(ciWrapper.state().attunement).toBeTruthy();
    });

    it('change attunement when attunementRequirementCheckBox is toggled',()=>{
        ciWrapper.find('input').at(5).simulate('change', {
            target: {checked: true, name: "attunementRequirementCheckBox"}
        });
        ciWrapper.find('input').at(5).simulate('change', {
            target: {checked: false, name: "attunementRequirementCheckBox"}
        });
        expect(ciWrapper.state().attunement).not.toBeTruthy();
    });

    it('change attunement when attunementRequirementCheckBox is checked',()=>{
        ciWrapper.find('input').at(5).simulate('change', {
            target: {checked: true, name: "attunementRequirementCheckBox"}
        });
        const desc = "Attunement is done through holding the item for 1 minute";
        ciWrapper.find('input').at(6).simulate('change',{
            target: {value: desc,
                    name: "attunementDescriptionInput"}
        });
        expect(ciWrapper.state().attunement_description).toEqual(desc);
    });

    it('changes description when itemDescriptionInput changes', ()=>{
        const desc = 'Here goes a long description about this item.';
        ciWrapper.find('textarea').at(0).simulate('change', {
            target: {value: desc, name: "itemDescriptionInput"}
        });
        expect(ciWrapper.state().description).toEqual(desc);
    });

    it('resets item on Scrap item clicked', ()=>{
        ciWrapper.setState({
            name : "Random",
            rarity : "uncommon",
            base_item_type: "armor",
            item_type: "wonderous_items",
            attunement: true,
            attunement_description: "Drop donw",
            description: "LAAAAAAAAAAAA",
            base_armor : "light",
            dex_bonus : "max2",
            str_requirement: 10,
            stealth_check: "disadvantage",
            base_weapon_type: "simple_ranged",
            base_weapon: "any",
            weapon_properties: [],
            weapon_damage: [2, 8],
            weapon_range: 120,
            has_charges: true,
            number_of_charges: 5,
            charges_reset_condition: "dawn",
            charges_reset_description: "",
            weight : 15,
            price: [1, 2, 0],
            item_tags: ["armor", "uncommon"],
            modifiers: [],
            conditions: [],
            spells: []
        })

        ciWrapper.find('button').at(1).simulate('click');
        const ciState = ciWrapper.state();
        expect(ciState.name).toEqual("");
        expect(ciState.rarity).toEqual("common");
        expect(ciState.attunement).toBeFalsy();
        expect(ciState.attunement_description).toEqual("");
        expect(ciState.description).toEqual("");
        expect(ciState.base_item_type).toEqual("item");
        expect(ciState.item_type).toEqual("wonderous_items");
        expect(ciState.base_armor).toEqual("any");
        expect(ciState.dex_bonus).toEqual("none");
        expect(ciState.str_requirement).toEqual(0);
        expect(ciState.stealth_check).toEqual("none");
        expect(ciState.base_weapon_type).toEqual("simple_melee");
        expect(ciState.base_weapon).toEqual("any");
        expect(ciState.weapon_properties).toEqual([]);
        expect(ciState.weapon_damage).toEqual([1, 4]);
        expect(ciState.weapon_range).toEqual(5);
        expect(ciState.has_charges).toBeFalsy();
        expect(ciState.number_of_charges).toEqual(0);
        expect(ciState.charges_reset_condition).toEqual("none");
        expect(ciState.charges_reset_description).toEqual("");
        expect(ciState.weight).toEqual(0);
        expect(ciState.price).toEqual([0,0,0]);
        expect(ciState.item_tags).toEqual([]);
        expect(ciState.modifiers).toEqual([]);
        expect(ciState.conditions).toEqual([]);
        expect(ciState.spells).toEqual([]);
    });

    it('changes base_item_type to armor and then changes selections', ()=>{
        ciWrapper.setState({base_item_type: 'armor'});
        ciWrapper.find('select').at(2).simulate('change',{
            target: {value: 'light', name: "baseArmorSelection"}
        });
        ciWrapper.find('select').at(3).simulate('change',{
            target: {value: 'max2', name: "dexBonusSelector"}
        });
        ciWrapper.find('input').at(6).simulate('change',{
            target: {value: 5, name: "strRequirementInput"}
        });
        ciWrapper.find('select').at(4).simulate('change',{
            target: {value: 'advantage', name: "stealthCheckSelector"}
        });

        expect(ciWrapper.state().base_armor).toEqual('light');
        expect(ciWrapper.state().dex_bonus).toEqual('max2');
        expect(ciWrapper.state().str_requirement).toEqual(5);
        expect(ciWrapper.state().stealth_check).toEqual('advantage');
    });

    it('changes base_item_type to weapon and then changes selections', ()=>{
        ciWrapper.setState({base_item_type: 'weapon'});
        ciWrapper.find('select').at(2).simulate('change',{
            target: {value: 'simple_ranged', name: "baseWeaponTypeSelector"}
        });
        expect(ciWrapper.state().base_weapon_type).toEqual('simple_ranged');
    });

    it('changes base_weapon for simple_melee', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon'
        });
        ciWrapper.find('select').at(3).simulate('change',{
            target: {value: 'club', name: "baseWeaponSelector"}
        });
        expect(ciWrapper.state().base_weapon).toEqual('club');
    });

    it('changes base_weapon for simple_ranged', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon',
            base_weapon_type: 'simple_ranged'
        });
        ciWrapper.find('select').at(3).simulate('change',{
            target: {value: 'dart', name: "baseWeaponSelector"}
        });
        expect(ciWrapper.state().base_weapon).toEqual('dart');
    });

    it('changes base_weapon for martial_melee', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon',
            base_weapon_type: 'martial_melee'
        });
        ciWrapper.find('select').at(3).simulate('change',{
            target: {value: 'flail', name: "baseWeaponSelector"}
        });
        expect(ciWrapper.state().base_weapon).toEqual('flail');
    });

    it('changes base_weapon for martial_ranged', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon',
            base_weapon_type: 'martial_ranged'
        });
        ciWrapper.find('select').at(3).simulate('change',{
            target: {value: 'net', name: "baseWeaponSelector"}
        });
        expect(ciWrapper.state().base_weapon).toEqual('net');
    });

    it('selects multiple weapon_properties', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon',
            base_weapon_type: 'martial_ranged'
        });
        ciWrapper.find('select').at(4).simulate('change',{
            target: {value: 'ammunition', name: "weaponPropertiesSelector"}
        });
        ciWrapper.find('select').at(4).simulate('change',{
            target: {value: 'finesse', name: "weaponPropertiesSelector"}
        });
        expect(ciWrapper.state().weapon_properties).toEqual(['ammunition', 'finesse']);

        ciWrapper.find('select').at(4).simulate('change',{
            target: {value: 'finesse', name: "weaponPropertiesSelector"}
        });
        expect(ciWrapper.state().weapon_properties).toEqual(['ammunition']);
    });

    it('selects weapon_damage', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon'
        });
        ciWrapper.find('input').at(6).simulate('change',{
            target: {value: 2, name: "diceNumberInput"}
        });
        ciWrapper.find('select').at(5).simulate('change',{
            target: {value: 8, name: "weaponDiceSelector"}
        });
        expect(ciWrapper.state().weapon_damage).toEqual([2,8]);
    });

    it('inputs weapon_range', ()=>{
        ciWrapper.setState({
            base_item_type: 'weapon'
        });
        ciWrapper.find('input').at(7).simulate('change',{
            target: {value: 120, name: "weaponRangeInput"}
        });
        expect(ciWrapper.state().weapon_range).toEqual(120);
    });
});