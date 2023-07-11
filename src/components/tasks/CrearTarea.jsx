import React from 'react';
import useCreateTask from '@hooks/useCreateTask';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

const CrearTarea = () => {

    const createTaskMutation = useCreateTask();
    const onFinish = (values) => {
        try {
            createTaskMutation.mutate(values);
        } catch (err) {
            console.log('Error:', err);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="nombre"
                    rules={[{ required: true, message: 'Please input the title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="descripcion"
                    rules={[{ required: true, message: 'Please input the description!' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="estado"
                    rules={[{ required: true, message: 'Please select the status!' }]}
                >
                    <Select placeholder="Select a status">
                        <Option value="pending">Pending</Option>
                        <Option value="in_progress">In Progress</Option>
                        <Option value="completed">Completed</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Due Date"
                    name="fechaLimite"
                    rules={[{ required: true, message: 'Please select the due date!' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            {createTaskMutation.isError && (
                <div>Error al crear la tarea: {createTaskMutation.error?.response?.data?.error}</div>
            )}
            {createTaskMutation.isSuccess && (
                <div>Tarea creada con éxito: {createTaskMutation.data.nombre}</div>
            )}
        </div>
    );
};

export default CrearTarea;