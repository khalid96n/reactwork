
import Accordion from '../components/Accordion'

function AccordionPage(){

const  items = [
    {
        id:'111',
        label: 'can i use react in projects',
        content: 'Yes you can use it as a language.Yes you can use it as a language Yes you can use it as a language'
    },

    {
        id:'112',
        label: 'can i use JavaScript in projects',
        content: 'Yes you can use it as a language.Yes you can use it as a language Yes you can use it as a language'
    },

    {
        id:'113',
        label: 'can i use CSS in projects',
        content: 'Yes you can use it as a language.Yes you can use it as a language Yes you can use it as a language'
    },
]


return <Accordion items={items}/>;

}

export default AccordionPage;