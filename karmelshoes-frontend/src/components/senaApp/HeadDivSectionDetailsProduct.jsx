/* eslint-disable react/prop-types */
export const HeadDivSectionDetailsProduct = ({imageUrl}) => {
    return (
        <>
            <div className="show-img">
                <div className="imageUrl">
                    <img src={imageUrl} alt="imagen del producto" />
                </div>
            </div>
        </>
    );
}