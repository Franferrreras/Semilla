<footer id="footer" class="clearfix" role="contentinfo">
    <#-- footer content -->
    <#assign journalContent = serviceLocator.findService("com.liferay.journal.util.JournalContent") />
    <#assign ddmTemplateLocalService = serviceLocator.findService("com.liferay.dynamic.data.mapping.service.DDMTemplateLocalService") />
    <#assign global_group_id = themeDisplay.getCompanyGroupId()!"" />
    <#assign site_ventana_group_id = getterUtil.getLong(theme_settings["ventana-group-id"]!"")>
    <#assign EnlacesPieId = theme_settings["enlaces-pie-article-id"]!"" />


    <div class="evr-footer">
        <div class="evr-footer__content">
            <div class="maxwidth maxwidth--inner">
                <div class="evr-footer__block">
                    <#--  Ventana logo  -->
                    <#if ventanaUrl?has_content>
	                    <figure class="evr-footer__logo">
		                    <a href="${ventanaUrl}">
		                        <img alt="<@liferay.language key="footer.logo.ventana.visitante" />" src="${images_folder}/logo_ventana_footer_white.png"/>
		                     </a>
	                    </figure>
                    </#if>
                    <#--  Redes sociales  -->
                    <div class="evr-footer__social">
                    	<#if twitterLink?has_content>
	                        <figure class="evr-footer__social-icon">
		                        <a href="${twitterLink}" target="_blank">
		                            <img alt="Twitter" src="${images_folder}/icons/tw.png"/>
		                         </a>
	                        </figure>
                        </#if>
                        <#if fbLink?has_content>
	                        <figure class="evr-footer__social-icon">
		                        <a href="${fbLink}" target="_blank">
		                            <img alt="Facebook" src="${images_folder}/icons/fb.png"/>
	                            </a>
	                        </figure>
                        </#if>
                        <#if instagramLink?has_content>
	                        <figure class="evr-footer__social-icon">
	                         <a href="${instagramLink}" target="_blank">
	                            <img alt="Instagram" src="${images_folder}/icons/ig.png"/>
	                         </a>
	                        </figure>
                       	</#if>
                       	<#if pinterestLink?has_content>
	                        <figure class="evr-footer__social-icon">
	                        	<a href="${pinterestLink}" target="_blank">
	                            	<img alt="Pinterest" src="${images_folder}/icons/pt.png"/>
	                            </a>
	                        </figure>
                        </#if>
                    </div>
                </div>
                <div class="evr-footer__block">
                    <#--  Europa Logo  -->
                    <#if urlFeder?has_content>
	                    <figure class="evr-footer__logo">
	                    	 <a href="${urlFeder}" target="_blank">
	                        <img alt="<@liferay.language key="footer.logo.fondos.feader" />" src="${images_folder}/Logo_UE_FEDER_Horizontal.png"/>
	                         </a>
	                    </figure>
                    </#if>
                    <#--  Junta Logo  -->
                    <#if urlConsejeria?has_content>
	                    <figure class="evr-footer__logo">
	                     <a href="${urlConsejeria}" target="_blank">
	                        <img alt="<@liferay.language key="footer.logo.ventana.visitante" />" src="${images_folder}/Logo_CAGPDS_Horizontal_Negativo.png"/>
	                     </a>
	                    </figure>
                    </#if>
                </div>
            </div>
        </div>
        <div class="maxwidth">
            <#--  Static pages  -->
            <div class="evr-footer__links">
                <#if EnlacesPieId?has_content>
                    <#attempt>
                        <#assign EnlacesPie_content = journalContent.getContent(site_ventana_group_id, EnlacesPieId, "", locale, theme_display)!"" />
                        ${EnlacesPie_content}
                    <#recover>
                        <!-- ERROR  -->
                    </#attempt>
                </#if> 
            </div>
        </div>
    </div>
</footer>