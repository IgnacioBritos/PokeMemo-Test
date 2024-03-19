    import './memoBlock.css';

    const MemoBlock = ({ memoBlock, animating, handelMemoClick }) => {
        return (
            <div onClick={() => (!memoBlock.flip && !animating) && handelMemoClick(memoBlock)} className="memo-block cursor-pointer h-20 w-16  md:w-28 md:h-40 lg:h-44 lg:w-32 gap-2 mb-3 ">
                <div className={`memo-block-inner ${memoBlock.flip && "memo-block-flipped"}`}> {/* Usar memoBlock.flip y memo-block-flipped */}
                    <div className="memo-block-front bg-cover bg-center"></div>
                    <div className="memo-block-back">
                        <img className='lg:size-[72px] ' src={memoBlock.sprites} alt={memoBlock.name} />
                        <p className='text-xs'>{memoBlock.name}</p>
                    </div>
                </div>
            </div>
        );
    };


    export default MemoBlock    