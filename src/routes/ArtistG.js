import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { singleSelectorPath, reloadSelectorPath, gridSelectorPath } from '../util'

// TODO: import as much as poss from G.js
//
function NFT4up(props){
	const nav = useNavigation()

	if (nav.state === "loading") {
		return(
						<div className="nft-loading" />
		)
	} else if (! props.nft_record) {
		// Here is how we handle missing records, when the total set isn't an even multiple of 4
		return(

						<div className="no-nft" />

		)
	} else{ 
		let nft = props.nft_record
		return(

						<div className="nft-col col-sm-5">
							<Link to={'/id/' + nft.metadata_id}>
								<img src={nft.media_url} className="nft-img img-fluid"/>
							</Link>
						</div>

		)
	}
}

export default function ArtistGrid(props){
	const loader = useLoaderData();
	const page = loader?.page || 0;

	let singlePath = singleSelectorPath(loader.nftGallery, loader.nftGalleryCursor, "grid", page)
  let reloadPath = reloadSelectorPath(loader.nftGallery, loader.nftGalleryCursor, "grid", page)
  let gridPath = gridSelectorPath(loader.nftGallery, loader.nftGalleryCursor, "grid", page)

	// 4-item array of NFT gallery data blobs
	const items = [
		loader?.nftGallery[page * 4],
		loader?.nftGallery[page * 4 + 1],
		loader?.nftGallery[page * 4 + 2],
		loader?.nftGallery[page * 4 + 3],
	];

	return(

		<div className="rnd4">

      <Header viewMode="4x" page={page} nftGalleryCursor={loader?.nftGalleryCursor} nftGallery={loader?.nftGallery} walletSelector={props.walletSelector} walletClick={props.walletClick} 
				singlePath={singlePath}
				reloadPath={reloadPath}
				gridPath={gridPath}
			/>

			<div className="artist-info container text-center mt-5">
				<div className="row">
					<div className="col">
						ARTIST: {loader.artistId}
					</div>
				</div>
			</div>

      <div id="maincontent" className="maincontent text-center mt-5">

				<div className="nft-4up">
					<div className="row align-items-center">
						<div className="col-sm"></div>
						<NFT4up nft_record={items[0]}  />
						<NFT4up nft_record={items[1]}  />
						<div className="col-sm"></div>
					</div>
					<div className="row align-items-center">
						<div className="col-sm"></div>
						<NFT4up nft_record={items[2]}  />
						<NFT4up nft_record={items[3]}  />
						<div className="col-sm"></div>
					</div>
				</div>

      </div>

      <Footer viewMode="4x" page={page} nftGalleryCursor={loader?.nftGalleryCursor} nftGallery={loader?.nftGallery} 
				singlePath={singlePath}
				reloadPath={reloadPath}
				gridPath={gridPath}
			/>

    </div>

	)
}
