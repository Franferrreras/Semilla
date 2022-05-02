<section id="content">
    
    <h1 class="hide-accessible">${the_title}</h1>
    <@liferay_portlet["runtime"]
    portletProviderAction=portletProviderAction.VIEW
    portletProviderClassName="com.liferay.portal.kernel.servlet.taglib.ui.BreadcrumbEntry"
	/>

    <#if selectable>
        <@liferay_util["include"] page=content_include />
    <#else>
        ${portletDisplay.recycle()}

        ${portletDisplay.setTitle(the_title)}

        <@liferay_theme["wrap-portlet"] page="portlet.ftl">
            <@liferay_util["include"] page=content_include />
        </@>
    </#if>


</section>
