import React from 'react';

function Nav() {
    const categories = [
        { name: "Group Projects", description: "Projects I have done in a group" },
        { name: "Solo Projects", description: "Projects I have done on my own" }
    ];
    
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

  return (
    <header>
    <nav>
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">About me</a>
            </li>
            <li>
                <span>Contact</span>
            </li>
            {categories.map((category) => (
                <li className="mx-1" key={category.name}>
                    <span onClick={() => categorySelected(category.name)} >
                        {category.name}
                    </span>
                </li>
            ))}
        </ul>
    </nav>
</header>
  );
}

export default Nav;