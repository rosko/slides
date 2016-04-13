const React = require('react');

function GithubStars({repo}) {
    repo = repo.replace('/', '%2f');
    const src = `https://buttons.github.io/buttons.html#href%3Dhttps%3A%2F%2Fgithub.com%2F${repo}%26text%3DStar%26data.count.api%3D%2Frepos%2F${repo}%23stargazers_count%26data.count.href%3D%2F${repo}%2Fstargazers%26data.count.aria.label%3D%23%20stargazers%20on%20GitHub%26data.style%3Dmega%26data.icon%3Docticon-star%26aria.label%3DStar%20${repo}%20on%20GitHub`
    return <iframe width={110} height={28} frameBorder={0} src={src}/>;
}

GithubStars.displayName = 'GithubStars';
GithubStars.propTypes = {
    repo: React.PropTypes.string
};

module.exports = GithubStars;
