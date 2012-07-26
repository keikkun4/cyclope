#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Copyright 2010-2012 Código Sur Sociedad Civil
# All rights reserved.
#
# This file is part of Cyclope.
#
# Cyclope is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Cyclope is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

from setuptools import setup, find_packages

setup(
    name='django-cyclope',
    version=__import__('cyclope').__version__,
    description="CMS for pythonistas who like to code instead of using a web UI for every task.",
    long_description=__import__('cyclope').__doc__,
    author='Nicolás Echániz & Santiago Hoerth',
    author_email='nicoechaniz@codigosur.org',
    url='http://bitbucket.org/nicoechaniz/django-cyclope/',
    license='GPL v3',
    platforms=['OS Independent'],
    classifiers=[
        "Development Status :: 4 - Beta",
        "Environment :: Web Environment",
        "Framework :: Django",
        "Intended Audience :: Developers",
        "License :: GPL v3",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
        "Topic :: Software Development",
        "Topic :: Software Development :: Libraries :: Application Frameworks",
    ],

    # revision number is indicated in the dependency_links for packages
    # that are downloaded from source to ensure a tested revision is used.
    dependency_links=[
        'hg+http://bitbucket.org/drmeers/django-dbgettext#egg=django-dbgettext-0.1',
        'git+http://github.com/nicoechaniz/django-filebrowser-no-grappelli-and-uploadify.git@d5098f607b75146e1d3c31ceff96f094e61cd27b#egg=django-filebrowser-3.0-nograpup',
        'hg+http://bitbucket.org/diegom/django-contact-form#egg=django-contact-form-0.4a1',
        'hg+http://bitbucket.org/nicoechaniz/django-rosetta_temp#egg=django-rosetta-0.6.2-temp',
        'hg+http://bitbucket.org/san/django-jsonfield#egg=django-jsonfield-0.6.0-cyclope',
    ],

    install_requires=[
        'Django>=1.4,<1.5',
        'FeinCms==1.3.1',
        'django-autoslug==1.4.1',
        'django-mptt==0.4.2', # 0.4 breaks compatibility
        'PIL>=1.1.7', # in PIL we trust
        'django-simple-captcha==0.2.0',
        'django-tagging==0.3.1',
        'django-tagging-autocomplete==0.3.1',
        'django-filebrowser==3.0-nograpup', # installed from our clone
        'South>=0.7,<0.8',
        'django-registration==0.8',
        'django-profiles==0.2',
        'django-admin-tools==0.4.0',
        'django-contact-form>=0.4a1', # installed from our clone
        'Whoosh>=1.8.3',
        'django-haystack>=1.2.7',
        'textile==2.1.4',
        'django-dbgettext>=0.1',
        'django-rosetta==0.6.2-temp', # installed from our clone
        'django-markitup==0.6.1',
        'django-jsonfield==0.6.0-cyclope', # installed from our clone
        'feedparser==5.1',
        'django-forms-builder>=0.7.5,<0.8',
    ],

    scripts=['cyclope/bin/cyclopeproject'],

    packages=find_packages(),

    include_package_data=True,
    zip_safe=False,
)
