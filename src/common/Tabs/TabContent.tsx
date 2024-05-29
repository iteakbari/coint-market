import React from 'react';
import DropdownMenu from './../DropdownMenu';
import VideoSec from '@/components/VideoSec/VideoSec';

interface TabContentProps {
    activeTabId: number;
}

const content = [
    { id: 0, content: 'Content for Tab 1' },
    { id: 1, content: 'Content for Tab 2' },
    { id: 2, content: 'Content for Tab 3' },
    { id: 3, content: 'Content for Tab 4' },
    { id: 4, content: 'Content for Tab 5' },
    { id: 5, content: 'Content for Tab 6' },
    { id: 6, content: 'Content for Tab 7' },
    { id: 7, content: 'Content for Tab 8' },
];

const TabContent: React.FC<TabContentProps> = ({ activeTabId }) => {
    const activeContent = content.find(c => c.id === activeTabId);

    return (
        <div className='tab-content my-10'>
            {/* {activeContent ? activeContent.content : 'Select a tab to see the content'} */}
            <DropdownMenu direction="left-0" menuClass='p-0 border' customeClass='w-max' trigger={<span className='btn-dashed'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 12h12M12 18V6" stroke="#35393c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                Add Filter
            </span>}>
                <div className='flex items-center border-b border-gray border-solid p-1 gap-2'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.39289 12.9285C10.4502 12.9285 12.9286 10.4501 12.9286 7.39283C12.9286 4.33554 10.4502 1.85712 7.39289 1.85712C4.3356 1.85712 1.85718 4.33554 1.85718 7.39283C1.85718 10.4501 4.3356 12.9285 7.39289 12.9285Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.1429 15.1429L11.3122 11.3122" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="search" name="" id="" className='rounded focus:outline-0' />
                </div>
                <ul>
                    <li>
                        <DropdownMenu direction='left-100 top-0' menuClass='p-2' customeClass='w-full' trigger={
                            <span className='flex justify-between py-1 px-2'>
                                <span>Item 1</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="#35393c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
                            </span>}>
                            <ul className="w-48">
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </DropdownMenu>
                    </li>
                    <li>
                        <DropdownMenu direction='left-100 top-0' menuClass='p-2' customeClass='w-full' trigger={
                            <span className='flex justify-between py-1 px-2'>
                                <span>Item 2</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="#35393c" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
                            </span>}>
                            <ul className="w-48">
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </DropdownMenu>
                    </li>
                    <li>
                        <span className='p-2'>item 3</span>
                    </li>
                    <li>
                        <span className='p-2'>item 4</span>
                    </li>
                </ul>
            </DropdownMenu>

            <VideoSec title='Featured' />
            <VideoSec title='Trending' />
        </div>
    );
};

export default TabContent;