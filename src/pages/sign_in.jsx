import { useNavigate } from 'react-router-dom';

export default function SignIn() {
	const router = useNavigate();

	return (
		<div className='flex items-center justify-center h-full'>
			<div className='flex min-h-full flex-1 flex-col justify-center'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<div className='flex items-center justify-center'>
						<img
							className='mr-2 h-10 w-auto'
							src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png'
							alt='logo'
						/>
						<b>
							<span className='text-gray-500'>Team </span>
							<span className='text-orange-600'>Calendar</span>
						</b>
					</div>
					<h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Connectez-vous pour continuer
					</h2>
				</div>

				<div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='' onSubmit={() => router('/calendar')}>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Address email
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='mt-4'>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'>
									mot de passe
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='mt-8'>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Connexion
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
