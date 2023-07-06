// routes.js
import CrearTarea from '../components/CrearTarea';
import ListarTarea from '../components/ListarTarea';
import {PlusCircleOutlined, UserOutlined, UnorderedListOutlined} from "@ant-design/icons";
const routes = [
    {
        path: '/crear',
        component: CrearTarea,
        title: 'Crear Tarea',
        icon: PlusCircleOutlined
    },
    {
        path: '/listar',
        component: ListarTarea,
        title: 'Listar Tareas',
        icon: UnorderedListOutlined
    },
    {
        path: '*',
        component: () => null,
        title: 'Inicio',
        icon: UserOutlined
    }
];

export default routes;
