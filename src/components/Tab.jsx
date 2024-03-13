import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [time, setTime] = useState(959)
    const [active, setActive] = useState(false)





    let [categories] = useState({
        'Pomodoro': [
            {
                id: 1,
                minute: 2,
            },

        ],
        'Short Break': [
            {
                id: 1,
                minute: 5,
                second: 59,
                commentCount: 29,
                shareCount: 16,
            },

        ],
        'Long Break': [
            {
                id: 1,
                minute: 15,
                second: 59,
                commentCount: 9,
                shareCount: 5,
            },

        ],
    })
    useEffect(() => {
        if (active && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [time, active])
    const getTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`
    }
    const activeTooggleBtn = () => {
        setActive(!active)
    }
    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                ' '
                            )}
                        >
                            <div className='flex flex-col items-center justify-center'>
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="relative  flex items-center justify-center bg-gray-100 rounded-md w-full hover:bg-gray-100"
                                    >
                                        <div className='flex items-center justify-center text-6xl font-semibold p-10 m-auto gap-x-3'>
                                            {(getTime(time))}
                                        </div>
                                    </div>
                                ))}
                                <button onClick={activeTooggleBtn} className='bg-blue-500 mt-2 rounded w-32 text-white p-2'>
                                    {active ? "Pause" : "Start"}
                                </button>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
