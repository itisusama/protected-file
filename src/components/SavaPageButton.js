import React from 'react';

const SavePageButton = () => {

  const savePage = () => {
    // Get the entire HTML of the page
    const pageHTML = document.documentElement.outerHTML;
    
    // Create a Blob with the HTML content
    const blob = new Blob([pageHTML], { type: 'text/html' });
    
    // Create a link element
    const link = document.createElement('a');
    
    // Create a URL for the Blob and set it as the href attribute of the link
    link.href = URL.createObjectURL(blob);
    
    // Set the download attribute with a default filename
    const currentDate = new Date().toLocaleDateString('en-CA'); // Formats the date as YYYY-MM-DD
    link.download = `protected_${currentDate}.html`;
    
    // Append the link to the body (it's required for the click to work in some browsers)
    document.body.appendChild(link);
    
    // Trigger a click event on the link
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <button onClick={savePage} class="mt-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Save Page to Local
        </span>
    </button>
  );
};

export default SavePageButton;
