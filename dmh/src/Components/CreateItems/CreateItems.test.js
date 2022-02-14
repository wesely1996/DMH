import { shallow, mount } from 'enzyme';
import CreateItems from './CreateItems';

describe('CreateItems', ()=>{
    let ciWrapper;
    let ciState;
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

    it('has 2 input elements renedered', ()=>{
        const selectElement = ciWrapper.find('input');
        expect(selectElement).toHaveLength(2);
    });

    it('has 3 input elements renedered when attunement is true', ()=>{
        ciWrapper.setState({attunement: true});
        
        const selectElement = ciWrapper.find('input');
        expect(selectElement).toHaveLength(3);
    });

    it('has 3 select elements renedered', ()=>{
        const selectElement = ciWrapper.find('select');
        
        expect(selectElement).toHaveLength(3);
    });

    it('has 2 button elements renedered', ()=>{
        const selectElement = ciWrapper.find('button');
        expect(selectElement).toHaveLength(2);
    });

    it('has 1 textarea element renedered', ()=>{
        const selectElement = ciWrapper.find('textarea');
        expect(selectElement).toHaveLength(1);
    });
});

describe('ChangeFormLayout',()=>{
    let ciWrapper;
    beforeAll(()=>{
        ciWrapper = mount(<CreateItems/>);
    });

    it('changes base_item_type to item by default', ()=>{
        expect(ciWrapper.state().base_item_type).toContain('item');
    });

    it('changes base_item_type to armor when select changes', ()=>{
        ciWrapper.find('select').at(1).simulate('change',{
            target: {value: 'armor', name: 'baseItemTypeSelection'}
        });
        expect(ciWrapper.state().base_item_type).toContain('armor');
    });

    it('changes base_item_type to weapon when select changes', ()=>{
        ciWrapper.find('select').at(1).simulate('change',{
            target: {value: 'weapon', name: 'baseItemTypeSelection'}
        });
        expect(ciWrapper.state().base_item_type).toContain('weapon');
    });

    it('changes rarity to common by default', ()=>{
        expect(ciWrapper.state().rarity).toContain('common');
    });

    it('changes rarity to uncommon when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'uncommon', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toContain('uncommon');
    });

    it('changes rarity to rare when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'rare', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toContain('rare');
    });

    it('changes rarity to very_rare when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'very_rare', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toContain('very_rare');
    });

    it('changes rarity to legendary when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'legendary', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toContain('legendary');
    });

    it('changes rarity to artifact when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'artifact', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toContain('artifact');
    });

    it('changes rarity to unique when select changes', ()=>{
        ciWrapper.find('select').at(0).simulate('change',{
            target: {value: 'unique', name: 'raritySelect'}
        });
        expect(ciWrapper.state().rarity).toContain('unique');
    });

    it('changes name when nameInput changes', ()=>{
        ciWrapper.find('input').at(0).simulate('change', {
            target: {value: 'Item Name', name: "nameInput"}
        });
        expect(ciWrapper.state().name).toContain('Item Name');
    });

    it('changes item_type to ammunition when select changes', ()=>{
        ciWrapper.setState({base_item_type: 'item'});
        ciWrapper.find('select').at(2).simulate('change',{
            target: {value: 'ammunition', name: "itemTypeSelection"}
        });
        expect(ciWrapper.state().item_type).toContain('ammunition');
    });

    it('change attunement when attunementRequirementCheckBox is checked',()=>{
        ciWrapper.find('input').at(1).simulate('change', {
            target: {checked: true, name: "attunementRequirementCheckBox"}
        });
        expect(ciWrapper.state().attunement).toBeTruthy();
    });

    it('change attunement when attunementRequirementCheckBox is toggled',()=>{
        ciWrapper.find('input').at(1).simulate('change', {
            target: {checked: true, name: "attunementRequirementCheckBox"}
        });
        ciWrapper.find('input').at(1).simulate('change', {
            target: {checked: false, name: "attunementRequirementCheckBox"}
        });
        expect(ciWrapper.state().attunement).not.toBeTruthy();
    });

    it('change attunement when attunementRequirementCheckBox is checked',()=>{
        ciWrapper.find('input').at(1).simulate('change', {
            target: {checked: true, name: "attunementRequirementCheckBox"}
        });
        const desc = "Attunement is done through holding the item for 1 minute";
        ciWrapper.find('input').at(2).simulate('change',{
            target: {value: desc,
                    name: "attunementDescriptionInput"}
        });
        expect(ciWrapper.state().attunement_description).toContain(desc);
    });

    it('changes description when itemDescriptionInput changes', ()=>{
        const desc = 'Here goes a long description about this item.';
        ciWrapper.find('textarea').at(0).simulate('change', {
            target: {value: desc, name: "itemDescriptionInput"}
        });
        expect(ciWrapper.state().description).toContain(desc);
    });

    it('resets item on Scrap item clicked', ()=>{
        ciWrapper.setState({
            name : "Random",
            rarity : "uncommon",
            base_item_type: "armor",
            item_type: "wonderous_items",
            attunement: true,
            attunement_description: "Drop donw",
            description: "LAAAAAAAAAAAA"
        })

        ciWrapper.find('button').at(1).simulate('click');
        const ciState = ciWrapper.state();
        expect(ciState.name).toContain("");
        expect(ciState.rarity).toContain("common");
        expect(ciState.attunement).toBeFalsy();
        expect(ciState.attunement_description).toContain("");
        expect(ciState.description).toContain("");
        expect(ciState.base_item_type).toContain("item");
        expect(ciState.item_type).toContain("wonderous_items");
    });
});