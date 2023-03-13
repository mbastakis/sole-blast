<template>
    <div id="navbar">
        <ul id="left-list" class="list">
            <li>Gallery</li>
            <li>Your Sole</li>
        </ul>
        <div id="logo">
            uniqueSole
        </div>
        <ul id="right-list" class="list">
            <li>F.A.Q</li>
            <li>About Us</li>
        </ul>
    </div>
</template>

<script>
</script>

<style>

#navbar {
    height: 80px;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 60px 20px;
    z-index: 100;
}

.list {
    list-style: none;
    display: flex;
    gap: 2vw;
}

.list li{
    cursor: pointer;
    position: relative;
    text-decoration: none;
    padding-bottom: 2px;
}
.list li::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}
.list li:after {
    transform: scaleX(0);
}
.list li:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
.list li:hover {
    color: var(--secondary);
}

#right-list {
    padding-right: 40px;
}

#logo {
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: -1.4px;
    font-size: 4rem;
    transform: rotate(-5deg);
    cursor: pointer;
    user-select: none;
    color: var(--primary);
}

</style>