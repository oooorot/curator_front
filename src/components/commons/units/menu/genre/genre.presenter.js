import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './genre.styles'


export default function GenreView(props) {
 
  return (
    <>  
        <C.Wrapper>
         <C.GenreBanner>
            <C.BannerTitle>작품 판매 </C.BannerTitle>
            <C.BannerSubTitle>Buy Original Paintings</C.BannerSubTitle>
         </C.GenreBanner>
            <C.GenreSelect>
               <C.Genre>장르1</C.Genre>
               <C.Genre>장르2</C.Genre>
               <C.Genre>장르3</C.Genre>
               <C.Select>
                  <option value={true}>추천순</option>
                  <option>인기순</option>
                  <option>최신순</option>
                  <option>리뷰 많은순</option>
                  <option>저가순</option>
                  <option>고가순</option>
               </C.Select>
            </C.GenreSelect>
         <C.GenreWrapper>
            <C.GenreColumn href="/art/work">
               <C.ColumnImage>
                  <C.ColumnInfo>
                     <C.ColumnTitle>속초 앞바다</C.ColumnTitle>
                     <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                     <C.ColumnArtist>
                        <C.ColumnPrice>130,000,000 ₩</C.ColumnPrice>
                     </C.ColumnArtist>
                     <C.ColumnArtist>
                        <C.ColumnProfile></C.ColumnProfile>
                        <C.ColumnName>유미정</C.ColumnName>
                     </C.ColumnArtist>
                  </C.ColumnInfo>
               </C.ColumnImage>
            </C.GenreColumn>
            <C.GenreColumn>
               <C.ColumnImage>
                     <C.ColumnInfo>
                        <C.ColumnTitle></C.ColumnTitle>
                        <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </C.ColumnImage>
            </C.GenreColumn>
            <C.GenreColumn>
               <C.ColumnImage>
                     <C.ColumnInfo>
                        <C.ColumnTitle></C.ColumnTitle>
                        <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </C.ColumnImage>
            </C.GenreColumn>
            <C.GenreColumn>
               <C.ColumnImage>
                     <C.ColumnInfo>
                        <C.ColumnTitle></C.ColumnTitle>
                        <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </C.ColumnImage>
            </C.GenreColumn>
            </C.GenreWrapper>
         <C.GenreWrapper>
         <C.GenreColumn>
               <C.ColumnImage>
                  <C.ColumnInfo>
                     <C.ColumnTitle>속초 앞바다</C.ColumnTitle>
                     <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                     <C.ColumnArtist>
                        <C.ColumnPrice>130,000,000 </C.ColumnPrice>
                     </C.ColumnArtist>
                     <C.ColumnArtist>
                        <C.ColumnProfile></C.ColumnProfile>
                        <C.ColumnName>유미정</C.ColumnName>
                     </C.ColumnArtist>
                  </C.ColumnInfo>
               </C.ColumnImage>
            </C.GenreColumn>
            <C.GenreColumn>
               <C.ColumnImage>
                     <C.ColumnInfo>
                        <C.ColumnTitle></C.ColumnTitle>
                        <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </C.ColumnImage>
            </C.GenreColumn>
            <C.GenreColumn>
               <C.ColumnImage>
                     <C.ColumnInfo>
                        <C.ColumnTitle></C.ColumnTitle>
                        <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </C.ColumnImage>
            </C.GenreColumn>
            <C.GenreColumn>
               <C.ColumnImage>
                     <C.ColumnInfo>
                        <C.ColumnTitle></C.ColumnTitle>
                        <C.ColumnContent>그림 설명 샬라샬라샬라샬라 </C.ColumnContent>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </C.ColumnImage>
            </C.GenreColumn>  
         </C.GenreWrapper>

         <LayoutPageNumber/>

        </C.Wrapper>
    </>
  )

}