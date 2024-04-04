import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useNavigate, Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);

function Home() {
	const [open, setOpen] = useState(false);
	// const [date, setDate] = useState(new Date());
	const router = useNavigate();
	const logout = () => {
		if (window.confirm('Etes-vous sure de vouloir vous deconnecter ?')) {
			router('/');
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
				<div className='flex items-center mb-5'>
					<button
						onClick={() => router('/utilisateurs')}
						type='button'
						className='ml-auto rounded-md flex h-8 font-bold items-center justify-center w-40 border border-transparent bg-orange-400 py-2 px-4 text-sm text-white shadow-sm hover:bg-blue-600'>
						Utilisateurs
					</button>
					<button
						onClick={() => router('/typeActions')}
						type='button'
						className='ml-4 rounded-md flex h-8 font-bold items-center justify-center w-40 border border-transparent bg-orange-400 py-2 px-4 text-sm text-white shadow-sm hover:bg-blue-600'>
						Types d'actions
					</button>
					<button
						onClick={() => router('/roles')}
						type='button'
						className='ml-4 rounded-md flex h-8 font-bold items-center justify-center w-40 border border-transparent bg-orange-400 py-2 px-4 text-sm text-white shadow-sm hover:bg-blue-600'>
						Roles
					</button>
					<button
						onClick={() => setOpen(true)}
						type='button'
						className='ml-4 mr-auto rounded-md flex h-8 font-bold items-center justify-center w-40 border border-transparent bg-orange-400 py-2 px-4 text-sm text-white shadow-sm hover:bg-blue-600'>
						Ajouter une action
					</button>
				</div>
				<Calendar
					localizer={localizer}
					// events={myEventsList}
					startAccessor='start'
					endAccessor='end'
					style={{ height: 475 }}
					defaultView='month'
				/>

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
												Ajouter une action
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
												htmlFor='action'
												className='block text-sm font-medium leading-6 text-gray-900'>
												Type d'action
											</label>
											<div className='mt-2'>
												<select
													id='action'
													name='action'
													required
													className='block w-full rounded-md border outline-none py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6'>
													<option></option>
													<option value='Faire a manger'>Faire a manger</option>
													<option value='aller a la sale'>
														Aller a la sale
													</option>
												</select>
											</div>
										</div>
										<div className='mt-4'>
											<label
												htmlFor='date'
												className='block text-sm font-medium leading-6 text-gray-900'>
												Date
											</label>
											<div className='mt-2'>
												<input
													id='date'
													name='date'
													type='date'
													min={moment(new Date()).format('YYYY-MM-DD')}
													// value={date}
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

export default Home;
