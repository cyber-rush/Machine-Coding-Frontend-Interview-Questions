import { useState } from "react"

const Folder = ({ explorer }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track folder open/close

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Check if folderItems exist to decide if it's a folder or a file
    const isFolder = explorer.folderItems && explorer.folderItems.length > 0;

    return (
        <div style={{ marginLeft: '20px' }}>
            <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
                {isFolder ? (
                    <span>📁 {explorer.name}</span>
                ) : (
                    <span>📄 {explorer.name}</span>
                )}
            </div>

            {/* Recursively render child folders/items when the folder is open */}
            {isFolder && isOpen && (
                <div style={{ marginLeft: '20px' }}>
                    {explorer.folderItems.map((item, index) => {
                        console.log('item', item)
                        return <Folder key={index} explorer={item} />
                    }
                    )}
                </div>
            )}
        </div>
    );
};

export default Folder