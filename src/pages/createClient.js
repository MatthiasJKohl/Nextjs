import CreateClientForm from '../../components/CreateClientForm'
import Head from 'next/head'


export default function ClientCreation() {
    return (
        <>
        <Head>
            <title>Create Client</title>
        </Head>
        <div className="grid place-items-center w-screen h-screen bg-slate-400">
        <div className='w-1/3 h-1/2'>
        <CreateClientForm />
            
        </div>
        </div>
        </>
    )

    
}



