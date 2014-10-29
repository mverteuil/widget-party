import os
from setuptools import setup

with open(os.path.join(os.path.dirname(__file__), 'README.rst')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='widget-party',
    version='0.1',
    packages=['widget_party'],
    include_package_data=True,
    install_requires=['django-dashing>=0.1.2', 'Django>=1.6', ],
    license='MIT License',  # example license
    description='A collection of widgets to add functionality to django-dashing.',
    long_description=README,
    url='https://github.com/mverteuil/widget-party',
    author='Matthew de Verteuil',
    author_email='onceuponajooks@gmail.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
        'Topic :: Utilities',
    ],
)
