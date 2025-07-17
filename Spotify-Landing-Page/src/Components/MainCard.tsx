type MainCardProps = {
    Src:string
    Content1:string
    Content2:string

}
const MainCard:React.FC<MainCardProps> = ({Src, Content1, Content2}) => {
    return (
        <div className="flex items-center w-[180px] mt-2 ">
            <div className="w-[45px] h-[45px]">
                <img src={Src} alt="" className="w-[100%] h-[100%] object-fill"/>
            </div>
            <div className="flex flex-col items-center gap-3 font-bold  ">
                ${Content1}
                ${Content2}
            </div>
        </div>

    )
}
export default MainCard