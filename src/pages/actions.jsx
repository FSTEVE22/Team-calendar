import { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useNavigate, Link } from 'react-router-dom';

const people = [
	{
		id: 0,
		name: 'Aller faire les courses',
	},
	{
		id: 1,
		name: 'Aller a la salle',
	},
];

export default function Actions() {
	const [open, setOpen] = useState(false);

	const router = useNavigate();
	const logout = () => {
		if (window.confirm('Etes-vous sure de vouloir vous deconnecter ?')) {
			router('/');
		}
	};

	const supprimer = () => {
		if (window.confirm('Etes-vous sure de vouloir supprimer cet element ?')) {
			alert('supprimer avec succès!');
		}
	};
	return (
		<div>
			<div className='flex px-10 py-2 border-b items-center'>
				<Link to='/calendar' className='flex items-center justify-center'>
					<img
						className='mr-2 h-10 w-auto'
						src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png'
						alt='logo'
					/>
					<b>
						<span className='text-gray-500'>Team </span>
						<span className='text-orange-600'>Calendar</span>
					</b>
				</Link>
				<div className='flex ml-auto font-bold'>
					<p>Bienvenue Cynthia Tankeu</p>
					<p
						onClick={logout}
						className='text-red-500 ml-4 cursor-pointer hover:text-red-600'>
						Deconnexion
					</p>
				</div>
			</div>
			<div className='p-10'>
				<div className='sm:flex sm:items-center'>
					<div className='sm:flex-auto'>
						<h1 className='text-lg font-bold leading-6 text-gray-900'>
							Types d'actions
						</h1>
						<p className='mt-2 text-sm text-gray-700'>
							Liste des types d'actions pouvant etre effectué par les
							utilisateurs
						</p>
					</div>
					<div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
						<button
							onClick={() => setOpen(true)}
							type='button'
							className='ml-auto rounded-md flex h-8 font-bold items-center justify-center w-40 border border-transparent bg-orange-400 py-2 px-4 text-sm text-white shadow-sm hover:bg-blue-600'>
							Ajouter
						</button>
					</div>
				</div>
				<div className='mt-8 flow-root'>
					<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
							<table className='min-w-full divide-y divide-gray-300'>
								<thead>
									<tr>
										<th
											scope='col'
											className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'>
											Nom
										</th>

										<th
											scope='col'
											className='relative py-3.5 pl-3 pr-4 sm:pr-3'>
											<span className='sr-only'>Modifier</span>
										</th>
										<th
											scope='col'
											className='relative py-3.5 pl-3 pr-4 sm:pr-3'>
											<span className='sr-only'>Supprimer</span>
										</th>
									</tr>
								</thead>
								<tbody className='bg-white'>
									{people.map((person) => (
										<tr key={person.email} className='even:bg-gray-50'>
											<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
												{person.name}
											</td>

											<td className='relative whitespace-nowrap pl-80 text-right text-sm font-medium'>
												<p className='cursor-pointer text-indigo-600 hover:text-indigo-900'>
													Modifier
													<span className='sr-only'>, {person.name}</span>
												</p>
											</td>
											<td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
												<p
													onClick={supprimer}
													className='cursor-pointer text-red-600 hover:text-red-900'>
													Supprimer
													<span className='sr-only'>, {person.name}</span>
												</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* modal */}
				<Transition.Root show={open} as={Fragment}>
					<Dialog
						as='div'
						className='fixed z-40 inset-0 overflow-y-auto'
						onClose={() => null}>
						<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0'
								enterTo='opacity-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'>
								<Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
							</Transition.Child>

							{/* This element is to trick the browser into centering the modal contents. */}
							<span
								className='hidden sm:inline-block sm:align-middle sm:h-screen'
								aria-hidden='true'>
								&#8203;
							</span>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
								<form className='relative inline-block align-bottom rounded-md bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full md:w-2/5'>
									<div>
										<div className='mx-auto relative h-14 flex items-center bg-orange-700 justify-center border-b border-gray-100 p-3'>
											<p className='text-sm text-white font-bold'>
												Ajouter un type d'action
											</p>
											<div className='absolute right-4 hover:bg-red-500 cursor-pointer px-2'>
												<b
													onClick={() => {
														setOpen(false);
													}}
													className='text-white text-md'>
													x
												</b>
											</div>
										</div>
									</div>
									<div className='p-8'>
										<div>
											<label
												htmlFor='text'
												className='block text-sm font-medium leading-6 text-gray-900'>
												Nom
											</label>
											<div className='mt-2'>
												<input
													id='text'
													name='text'
													type='text'
													required
													className='block w-full rounded-md border outline-none py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
										<div className='mt-8'>
											<button
												type='submit'
												className='inline-flex h-10 rounded-md items-center justify-center w-full border border-transparent shadow-sm px-4 py-2 bg-orange-700 font-medium text-white hover:bg-orange-800 text-sm'>
												{/* {loading ? (
											<>
												<i className='ri-loader-line animate-spin h-5 w-5 text-md mr-1'></i>
												<span> Processing...</span>
											</>
										) : ( */}
												<span> Valider</span>
												{/* )} */}
											</button>
										</div>
									</div>
								</form>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>
			</div>
		</div>
	);
}
