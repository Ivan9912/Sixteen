import CardBasic from '@/components/cards/CardBasic.jsx';
import AdminLayout from './layoutAdm.js';
import { metadata } from './layoutAdm.js';
metadata.title ='Sixteen | Admin';

export default function Admin () {
    return  <AdminLayout>
                <CardBasic title={'Iniciar Sesión'}>

                </CardBasic>
            </AdminLayout>
    
};