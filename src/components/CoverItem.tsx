import { FaRegEye } from 'react-icons/fa';
import Tag from './Tag';
import { TManga } from '../utilities/Types';

const CoverItem = ({ manga } : TManga) => {
    return (
        <div className='flex justify-center items-center'>
            <img src={`${manga.image}`} className='max-w-sm min-w-72 h-96 rounded-md' />

            <div className='text-white ml-16 w-2/4'>
                <ol>
                    <li className='font-mono text-4xl font-extrabold'>{manga.title}</li>
                    <li className='my-4 flex'>
                        <Tag>
                            {manga.chapter}
                        </Tag>
                        <Tag>
                            <FaRegEye className='mr-2' />
                            {manga.view}
                        </Tag>
                    </li>
                    <li className='font-sans line-clamp-3'>{manga.description}</li>
                </ol>
            </div>
        </div>
    )
}

export default CoverItem