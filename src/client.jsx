import {createClient} from '@sanity/client';

export default createClient({
    projectId: '9ik05vf8',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-06-04', 
  })