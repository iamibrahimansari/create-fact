import {useState, createContext} from 'react';
import supabase from '../supabase';

export const FactCreaterContext = createContext();

const initialState = {
    fact: '',
    source: '',
    category: ''
}

export const FactCreaterProvider = ({children}) =>{
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formInfo, setFormInfo] = useState(initialState);
    const [facts, setFacts] = useState([]);
    const [err, setErr] = useState(null);
    const [currCategory, setCurrCategory] = useState('all');
    const [charLength, setCharLength] = useState(200);

    const getData = async category => {
        let query = supabase.from('facts').select('*');
        if(category !== 'all'){
            query = query.eq('category', category);
        }
        const { data: facts, error } = await query.order('general', {ascending: false}).limit(1000);
        if(!error && facts.length){
            setFacts(facts);
        }else{
            setErr(error ? error.message : 'TypeError: Something wrong');
        }
    }

    const setData = async (fact, source, category) =>{        
        const { data, error } = await supabase.from('facts').insert([{fact, source, category},]).select();
        setFacts([data[0], ...facts]);
    }

    const updateVotes = async (id, voteFor, vote) =>{        
        const { data, error } = await supabase.from('facts').update({ [voteFor]: vote + 1 }).eq('id', id).select()
    }

    const states = {
        isFormOpen,
        setIsFormOpen,
        formInfo,
        setFormInfo,
        facts,
        setFacts,
        initialState,
        getData,
        err,
        currCategory,
        setCurrCategory,
        setData,
        updateVotes,
        charLength,
        setCharLength
    }

    return <FactCreaterContext.Provider value={states}>
        {children}
    </FactCreaterContext.Provider>
}