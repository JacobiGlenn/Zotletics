import {createClient} from '@supabase/supabase-js';

//draft database 
//used to connect to the supabase database and perform CRUD operations on the users table.
//  It exports the supabase client and functions 
// for creating, reading, updating, and deleting users in the database. 
// The functions use async/await syntax to handle asynchronous 
// operations and return the data or error from the database queries.


//replace with real values from supabase dashboard later
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

//create / insert
export const createUser = async (user) => {
  const {data, error} = await supabase
    .from('users')
    .insert([user.username, user.email, user.password]);
    if (error) {
      console.error('Error creating user:', error);
      return null;
    }
    return data;
}

//read / select
export const getUserByEmail = async (email) => {
  const {data, error} = await supabase    .from('users')
    .select('*')
    .eq('email', email)
    .single();
    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }
    return data;
}

// update / put
export const updateUser = async (id, updatedFields) => {
  const {data, error} = await supabase
    .from('users')
    .update(updatedFields)
    .eq('id', id);
    if (error) {
        console.error('Error updating user:', error);
        return null;
    }
    return data;
}

// delete
export const deleteUser = async (id) => {
  const {data, error} = await supabase
    .from('users')
    .delete()
    .eq('id', id);
    if (error) {
        console.error('Error deleting user:', error);
        return null;
    }
    return data;
}
