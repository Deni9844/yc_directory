import Link from 'next/link';
import Image from 'next/image';
import { auth,signIn,signOut } from '@/auth'
const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans max-w-[1800px] m-auto'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
              <Image src="/logo.png" alt='logo' width={155} height={48}/>
            </Link>

            <div className='flex items-center gap-5 text-black'>
                { session && session?.user ? (
                    <>
                      <Link href="/startup/create">
                        <span>Create</span>
                      </Link>
                    
                      <form action={async () => {
                        "use server";

                        await signOut({ redirectTo: '/'});
                      }}>
                        <button type='submit'>
                           <span>Logout</span>  
                        </button>
                      </form>
                      
                      <Link href={`/user/${session?.user?.id}`}>
                        <span>{session?.user?.name}</span>
                      </Link>

                    </>
                ): (
                    <form action={async () => {
                        "use server";

                        await signIn('github');
                    }}>
                       <button type='submit'>
                         Login
                       </button> 
                    </form>
                )

                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
