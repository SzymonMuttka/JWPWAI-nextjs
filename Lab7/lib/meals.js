//import sql from 'better-sqlite3';
import { supabase } from './supabase';

//const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data, error } = await supabase.from('meals').select('*');

    console.log('data: ', data);

    if(error){
        throw error;
    }
    return data;

    //throw new Error('Loading meals failed');
    //return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    const { data, error } = await supabase.from('meals').select('*').eq('slug', slug).single();
    if(error){
        throw error;
    }
    return data;
    //return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}